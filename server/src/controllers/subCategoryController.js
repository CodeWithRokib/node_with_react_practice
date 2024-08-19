import SubCategory from "../models/subCategoryModel.js";

export const getAllSubCategory = async (req, res) =>{
    try {
        const subcategory = await Subcategory.find({});
        res.status(200).send({
          success: true,
          message: "Subcategory Get Successfully",
          subcategory,
        });
      } catch (error) {
        res.status(404).send({
          success: true,
          error,
        });
      }
}

export const createSubCategory = async(req,res)=>{
    const subcategory = new Subcategory({ name: req.body.name, categoryId: req.body.categoryId });
    try {
        const savedSubcategory = await subcategory.save();
        res.json(savedSubcategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const updateSubCategory = async(req,res)=>{
    try {
        const updatedSubcategory = await Subcategory.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
        res.json(updatedSubcategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
  }

  export const getSubCategoryById = async (req, res) => {
    try {
      const subcategory = await Subcategory.findById(req.params.id);
      if (!subcategory) {
        res.status(404).send({
          success: false,
          message: "Sub Category Not Found",
        });
      }
      res.status(200).send({
        success: true,
        message: "Sub Category Found Successfully",
        users,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Internal Server Error",
        error,
      });
    }
  };



export const deleteSubCategory = async(req,res)=>{
    try {
        await Subcategory.findByIdAndDelete(req.params.id);
        res.json({ message: 'Subcategory deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  }