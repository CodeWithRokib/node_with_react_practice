import mongoose from "mongoose";

const SubcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

export default mongoose.model('Subcategory', SubcategorySchema);