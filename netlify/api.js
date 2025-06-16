import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "../../routes/auth.route.js";

dotenv.config();

const app = express();

// ✅ Add body parser limit fix
app.use(express.json({ limit: "1mb" }));
app.use(cors({ origin: "*", credentials: true }));
app.use(cookieParser());

// ⚠ Netlify functions live at '/.netlify/functions/api'
app.use("/api/auth", authRoutes);

export const handler = serverless(app);
