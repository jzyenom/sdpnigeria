import Jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";

const requireAuth = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwtAuth;

  // Check if Authorization header exists
  if (token) {
    try {
      const decoded = Jwt.verify(token, process.env.JWT_SECRET);

      // Find user by decoded id
      req.user = await User.findById(decoded.id).select("-password");
      // Call next middleware
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, Wrong token");
    }
  } else {
    // No Authorization header or Bearer token
    res.status(401);
    throw new Error("No token, not authorized");
  }
});

const admin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
});

export { requireAuth, admin };
