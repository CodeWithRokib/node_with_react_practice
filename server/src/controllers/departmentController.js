import Department from "../models/DepartmentModel.js";

export const createDepartment = async (req, res) => {
    const { name, description } = req.body;
    const image = req.file ? req.file.filename : '';

    try {
        const department = new Department({ name, description, image });
        const createdDepartment = await department.save();
        res.status(201).json(createdDepartment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find({});
        res.json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
