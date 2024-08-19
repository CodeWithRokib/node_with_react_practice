import express from "express";
import upload from "../middlewares/upload.js";
import { getAllProduct, createProduct, getProductById, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.get("/product", getAllProduct);
router.post("/product/create", upload.single('image'), createProduct);
router.get("/product/:id", getProductById);
router.put("/product/:id", upload.single('image'), updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
