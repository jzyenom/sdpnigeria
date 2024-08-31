import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import colors from "colors";
import dataBaseEng from "./config/dbConfig.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import userRoute from "./routes/userRoutes.js";
import paymentRoute from "./routes/paymentRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(cookieParser());

// Static files
app.use(
  "/assets",
  express.static(path.join(__dirname, "public/assets"), {
    etag: false, // Disable ETag headers
    lastModified: false, // Disable Last-Modified headers
    setHeaders: (res, path) => {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
    },
  })
);

// File storage configuration
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
  fileFilter: (req, file, cb) => {
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

// Route with file
import { registerUser } from "./controllers/userController.js";
app.post("/api/auth/register", upload.single("avatar"), registerUser);

// Other routes
app.use("/api/auth", userRoute);
app.use("/api/pay", paymentRoute);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
dataBaseEng()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server started @ http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });
