import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  editUser,
  deleteUser,
  getUsers,
  getUserProfile,
} from "../controllers/userController.js";

import { requireAuth, admin } from "../middleware/authMiddleware.js";

import multer from "multer";
import path from "path";

// Set up multer for file handling
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({
  storage: fileStorageEngine,
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Only images are allowed"));
    }
  },
});

const router = express.Router();

router.post("/register", upload.single("avatar"), registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/all", getUsers);
router.get("/profile/:id", requireAuth, getUserProfile);
router.put("/profile/:id/edit", requireAuth, editUser);
router.delete("/profile/:id/delete", requireAuth, deleteUser);

export default router;
