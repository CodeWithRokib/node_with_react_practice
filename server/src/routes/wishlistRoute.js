import express from "express";
import { getWishlistByUserId, removeWishlist, addWishlist } from '../controllers/wishlistController.js';

const router = express.Router();

router.get("/wishlist/:userId", getWishlistByUserId);
router.post("/addwishlist", addWishlist);
router.delete("/removewishlist", removeWishlist);

export default router;
