import asyncHandler from "express-async-handler";
import axios from "axios";
import User from "../models/User.js";
import Payment from "../models/Payment.js";
import dotenv from "dotenv";

dotenv.config();

// Initiate Payment
const initiatePayment = asyncHandler(async (req, res) => {
  try {
    const { amount } = req.body;

    // Log the incoming amount for debugging
    console.log(`Received amount: ${amount}`);

    // Ensure the amount is a number and is positive
    if (typeof amount !== "number" || amount <= 0) {
      console.log("Invalid amount provided");
      return res.status(400).json({ message: "Invalid amount provided" });
    }

    // Convert amount to kobo (Paystack expects the amount in kobo)
    const amountInKobo = Math.round(amount * 100);

    // Log the amount in kobo for debugging
    console.log(`Amount in kobo: ${amountInKobo}`);

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const params = {
      email: user.email,
      amount: amountInKobo, // Paystack expects amount in kobo
    };

    // Log the params being sent to Paystack
    console.log(`Params: ${JSON.stringify(params)}`);

    const options = {
      method: "POST",
      url: "https://api.paystack.co/transaction/initialize",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
        "Content-Type": "application/json",
      },
      data: params,
    };

    const response = await axios(options);
    console.log("Paystack Response:", response.data); // Log the response from Paystack

    if (!response.data.status) {
      return res.status(400).json({ message: response.data.message });
    }

    const payment = new Payment({
      userId: user._id,
      amount: amount, // Store the amount in Naira
      reference: response.data.data.reference,
      status: "pending",
    });

    const savedPayment = await payment.save();

    return res.status(201).json({
      savedPayment,
      authorizationUrl: response.data.data.authorization_url,
      reference: response.data.data.reference,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred on the server" });
  }
});

// Verify Payment
const verifyPayment = asyncHandler(async (req, res) => {
  try {
    const { reference } = req.query;

    const options = {
      method: "GET",
      url: `https://api.paystack.co/transaction/verify/${reference}`,
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axios(options);
    if (!response.data.status) {
      return res.status(400).json({ message: response.data.message });
    }

    const payment = await Payment.findOne({ reference });
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    payment.status =
      response.data.data.status === "success" ? "success" : "failed";
    const savedPayment = await payment.save();

    // Update the user's Paymentstatus to "verified" if the payment was successful
    if (response.data.data.status === "success") {
      const user = await User.findById(payment.userId);
      if (user) {
        user.Paymentstatus = "verified";
        await user.save();
      }
    }

    return res.status(200).json({
      savedPayment,
      verifyResponse: response.data,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return res.status(500).json({ error: "An error occurred on the server" });
  }
});

export { initiatePayment, verifyPayment };
