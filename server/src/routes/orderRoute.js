import express from "express";
import { orderGetById, createOrder } from "../controllers/orderController.js";

const router = express.Router();

router.get("/order/:id", orderGetById);
router.post("/order", createOrder);

export default router;
