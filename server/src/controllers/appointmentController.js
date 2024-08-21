import Appointment from '../models/appointmentModel.js';

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