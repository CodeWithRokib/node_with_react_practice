import mongoose from "mongoose";

const WishlistItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

const WishlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    items: [WishlistItemSchema]
});

const Wishlist =  mongoose.model('Wishlist', WishlistSchema);
export default Wishlist;