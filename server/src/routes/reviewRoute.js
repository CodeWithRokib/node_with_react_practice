import express from "express";
import { getProductIdByReview, createReview } from "../controllers/reviewController.js";

const router = express.Router();

router.get("/review/:productId", getProductIdByReview);
router.post("/review", createReview);

export default router;
