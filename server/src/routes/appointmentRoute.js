import express from 'express';
import { createAppointment, updateAppointmentStatus } from '../controllers/appointmentController.js'; 

const router = express.Router();

router.post('/appointments', createAppointment);
router.put('/appointments/:appointmentId/status', updateAppointmentStatus);


export default router;
