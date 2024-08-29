import Appointment from '../models/appointmentModel.js';
import { sendNotificationEmail } from '../utils/mailService.js';

export const createAppointment = async (req, res) => {
    const {
        userId,
        name,
        department,
        doctor_name,
        phone,
        age,
        date,
        description,
        status
    } = req.body;

    try {
        const newAppointment = new Appointment({
            userId,
            name,
            department,
            doctor_name,
            phone,
            age,
            date,
            description,
            status
        });

        const savedAppointment = await newAppointment.save();

        res.status(201).json({
            message: 'Appointment created successfully',
            data: savedAppointment,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating appointment',
            error: error.message,
        });
    }
};

export const updateAppointmentStatus = async (req, res) => {
    const { appointmentId } = req.params;
    const { status } = req.body;
  
    try {
      const appointment = await Appointment.findById(appointmentId);
      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
  
      // Update the status
      appointment.status = status;
      await appointment.save();
  
      // Send an email notification to the user
      const emailSubject = `Your appointment status has been updated`;
      const emailText = `Hello ${appointment.name}, your appointment with ${appointment.doctor_name} on ${appointment.date.toDateString()} has been updated to ${status ? 'Confirmed' : 'Pending'}.`;
      await sendNotificationEmail(appointment.email, emailSubject, emailText);
  
      res.json({ message: 'Appointment status updated and email sent successfully' });
    } catch (error) {
      console.error('Error updating appointment status:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  export const getAppointmentController = async (req, res) => {
    try {
      const appointments = await Appointment.findById(req.params.id);
      res.status(200).send({
        success: true,
        message: "User Found Successfully",
        appointments,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Internal Server Error",
        error,
      });
    }
  };

