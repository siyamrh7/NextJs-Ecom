const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    brand: {
        type: String, required: true
    },
    price: {
        type: Number, required: true
    },
    size: {
        type: String
    },
    colors: {
        type: String
    },
    discount: {
        type: Number, required: true
    },
    description: {
        type: String, required: true
    },
    tdetails: {
        type: String,
    },
    ntdetails: {
        type: String
    },
    images: {
        type: Array,
        default: [],
        required:true
    },
    subcategory:{
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shops"
    }
}, { timestamps: true })

const Products = mongoose.model("Products", productSchema)

module.exports = Products