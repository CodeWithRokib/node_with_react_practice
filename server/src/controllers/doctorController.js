import Doctor from '../models/doctorModel.js';
import upload from '../middlewares/upload.js';  // Adjust the path as needed

export const createDoctor = async (req, res) => {
  const { name, department, phone, designation } = req.body;

  try {
    const newDoctor = new Doctor({
      name,
      department,
      phone,
      designation,
      image: req.file ? req.file.path : null,  
    });

    const savedDoctor = await newDoctor.save();

    res.status(201).json({
      message: 'Doctor created successfully',
      data: savedDoctor,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating doctor',
      error: error.message,
    });
  }
};
