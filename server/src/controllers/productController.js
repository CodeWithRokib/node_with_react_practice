import Product from "../models/productModel.js";

export const getAllProduct = async (req, res) => {

    try {
      const products = await Product.find({});
      res.status(200).send({
        success: true,
        message: "Product Get Successfully",
        products,
      });
    } catch (error) {
      res.status(404).send({
        success: false,
        message: "Product Not Found",
        error,
      });
    }
  };

export const createProduct = async (req, res) =>{
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        categoryId: req.body.categoryId,
        subcategoryId: req.body.subcategoryId,
        image: req.file ? req.file.path : ''
    });
    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
  }


export const updateProduct = async (req, res) =>{
    const updateData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        categoryId: req.body.categoryId,
        subcategoryId: req.body.subcategoryId
    };
    if (req.file) {
        updateData.image = req.file.path;
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const getProductById = async(req,res)=>{
    try {
        const products = await Product.findById(req.params.id);
        if (!products) {
          res.status(404).send({
            success: false,
            message: "Product Not Found",
          });
        }
        res.status(200).send({
          success: true,
          message: "Product Get Successfully",
          products,
        });
      } catch (error) {
        res.status(500).send({
          success: true,
          message: "Internal Server Error",
          error,
        });
      }
}

export const deleteProduct = async (req, res) =>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}