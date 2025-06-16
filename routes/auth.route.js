import express from "express";
import {
	askFromPDF,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/chat", askFromPDF)

export default router;
