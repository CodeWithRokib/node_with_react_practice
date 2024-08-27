import express from "express";
import {
  createContact,
  getAllContact,
} from "../controllers/contactController.js";
const router = express.Router();

router.post("/contacts", createContact);
router.get("/contacts", getAllContact);

export default router;
