const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true
    },
    shopPhone: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    shopAddress: {
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type:String
    },
    products: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Products" }
    ]
}, { timestamps: true })

const Shops = mongoose.model("Shops", shopSchema)

module.exports = Shops