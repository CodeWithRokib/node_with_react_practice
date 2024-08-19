import express from "express";
import { getAllCategory, getCategoryById, deleteCategory, updateCategory, createCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/category", getAllCategory);
router.get("/category/:id", getCategoryById);
router.delete("/category/:id", deleteCategory);
router.put("/category/:id", updateCategory);
router.post("/category", createCategory);

export default router;
