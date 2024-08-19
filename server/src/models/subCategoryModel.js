import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema({
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

const SubCategory =  mongoose.model('SubCategory', SubCategorySchema);
export default SubCategory;