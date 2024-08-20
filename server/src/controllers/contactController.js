import Contact from "../models/contactModel.js";

export const createContact = async(req,res)=>{
    const contact = new Contact({ name: req.body.name });
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