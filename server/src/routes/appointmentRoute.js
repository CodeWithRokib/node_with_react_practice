import express from 'express';
import { createAppointment } from '../controllers/appointmentController.js'; 

const router = express.Router();

router.post('/appointments', createAppointment);

export default router;
