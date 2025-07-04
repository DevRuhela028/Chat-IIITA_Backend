import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import serverless from "serverless-http";

import authRoutes from "../routes/auth.route.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

export default serverless(app);
