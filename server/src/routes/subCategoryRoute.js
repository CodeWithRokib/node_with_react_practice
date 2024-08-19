import express from "express";
import { getAllSubCategory, getSubCategoryById, deleteSubCategory, updateSubCategory, createSubCategory } from "../controllers/subCategoryController.js";

const router = express.Router();

router.get("/subcategory", getAllSubCategory);
router.get("/subcategory/:id", getSubCategoryById);
router.delete("/subcategory/:id", deleteSubCategory);
router.put("/subcategory/:id", updateSubCategory);
router.post("/subcategory", createSubCategory);

export default router;
