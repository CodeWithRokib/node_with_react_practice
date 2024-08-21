import express from 'express';
import { createDoctor } from '../controllers/doctorController.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.post('/doctors', upload.single('image'), createDoctor); 

export default router;
