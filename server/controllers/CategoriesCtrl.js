const Shops = require('../models/Shops')
const Products = require('../models/Products')
const Users = require('../models/Users')
const Categories = require("../models/Categories")
const CreateCategory = async (req, res) => {
    try {
        const { subcategory, name } = req.body
        const find = await Categories.findOne({ name })
        if (find && subcategory) {
            const category = await Categories.findOneAndUpdate({ name }, { $push: { subcategory: { name: subcategory } } },
                {returnDocument: 'after'})
            return res.json({ status: true, msg: "Category updated successfully", category })
        }
        else if (find) {
            return res.json({ status: false, msg: "Category must be unique" })
        }
        const category = await Categories.create({
            subcategory: { name: subcategory }, name, image: req.file.path
        })
        res.json({ status: true, msg: "Category creation successful", category })
    } catch (error) {
        res.json({ status: false, msg: error.message, error: error })
    }

}
const GetCategories = async (req, res) => {
    try {
        const categories = await Categories.find({})
        res.json({ status: true, categories })

    } catch (error) {
        res.json({ status: false, msg: error.message, error: error })

    }
}
const GetCategory = async (req, res) => {

    try {
        const category = await Categories.findOne({ name: req.query.category }).populate("products").exec()
        res.json({ status: true, category })

    } catch (error) {
        res.json({ status: false, msg: error.message, error: error })

    }
}
const GetProductBySubCategory = async (req, res) => {

    try {
        const products = await Products.find({ subcategory: req.query.subcategory })
        res.json({ status: true, products })

    } catch (error) {
        res.json({ status: false, msg: error.message, error: error })

    }
}
module.exports = { CreateCategory, GetCategories, GetCategory, GetProductBySubCategory }