import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import serverless from 'serverless-http';

import authRoutes from '../routes/auth.route.js';

dotenv.config();

const app = express();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

export const handler = serverless(app);
