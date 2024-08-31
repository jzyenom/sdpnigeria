// routes/paymentRoutes.js
import express from "express";
import {
  initiatePayment,
  verifyPayment,
} from "../controllers/paymentController.js";
import { requireAuth, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/initiate", requireAuth, initiatePayment);
router.get("/verify", requireAuth, verifyPayment);

export default router;
