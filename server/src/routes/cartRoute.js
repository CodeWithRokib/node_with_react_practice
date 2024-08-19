import express from "express";
import { addCart, getCartByUserId } from "../controllers/cartController.js";

const router = express.Router();

router.get("/product/:userId", getCartByUserId);
router.post("/addtocart", addCart);

export default router;
