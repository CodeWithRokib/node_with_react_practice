import Review from '../models/reviewModel.js';
import Product from '../models/productModel.js';

export const createReview = async (req, res) =>{
    const { productId, rating, comment } = req.body;
    const userId = req.user.id;

    try {
        const review = new Review({
            userId,
            productId,
            rating,
            comment
        });

        const savedReview = await review.save();
        
        const product = await Product.findById(productId);
        product.reviews.push(savedReview._id);
        await product.save();

        res.status(201).json(savedReview);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getProductIdByReview = async (req, res) =>{
    const { productId } = req.params;

    try {
        const product = await Product.findById(productId).populate({
            path: 'reviews',
            populate: { path: 'userId', select: 'name' }
        });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product.reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}