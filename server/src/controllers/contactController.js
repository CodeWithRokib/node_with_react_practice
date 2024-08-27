import Contact from "../models/contactModel.js";

export const getAllContact = async (req, res, next) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).send({
      success: true,
      message: "User Get Successfully",
      contacts,
    });
  } catch (error) {
    res.status(404).send({
      success: true,
      error,
    });
  }
};


export const createContact = async(req,res)=>{
    const contact = new Contact({ name: req.body.name, email: req.body.email, phone: req.body.phone, description: req.body.description });
    try {
        const savedContact = await contact.save();
        res.status(200).json({
          success:true,
          message: "Category created Successfully",
          savedContact,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
  }