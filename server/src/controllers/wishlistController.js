import Wishlist from '../models/wishlistModel';
import Product from '../models/productModel';

export const addWishlist = async (req, res) =>{
    const userId = req.user.id;
    const { productId } = req.body;

    try {
        let wishlist = await Wishlist.findOne({ userId });
        if (!wishlist) {
            wishlist = new Wishlist({ userId, items: [] });
        }

        const existingItem = wishlist.items.find(item => item.productId.toString() === productId);
        if (existingItem) {
            return res.status(400).json({ message: 'Product already in wishlist' });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        wishlist.items.push({ productId });
        const updatedWishlist = await wishlist.save();
        res.json(updatedWishlist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get user's wishlist
export const getWishlistByUserId = async (req, res) =>{
    const userId = req.user.id;

    try {
        const wishlist = await Wishlist.findOne({ userId }).populate('items.productId');
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        res.json(wishlist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const removeWishlist = async (req, res) =>{
    const userId = req.user.id;
    const { productId } = req.body;

    try {
        const wishlist = await Wishlist.findOne({ userId });
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }

        wishlist.items = wishlist.items.filter(item => item.productId.toString() !== productId);
        const updatedWishlist = await wishlist.save();
        res.json(updatedWishlist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}