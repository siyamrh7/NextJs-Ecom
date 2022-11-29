const Shops=require('../models/Shops')
const Products=require('../models/Products')
const Users = require('../models/Users')
const Categories=require('../models/Categories')
const CreateProduct=async(req,res)=>{
    try {
        const {title,subcategory,brand,price,size,colors,discount,description,tdetails,ntdetails,category}=req.body
       const product=await Products.create({
        title,brand,price,size,colors,discount,description,tdetails,ntdetails,category,
        shop:req.id,images:req.files,subcategory
       })
        const Category=await Categories.findByIdAndUpdate(category,{$push:{products:product.id}})
        const Shop=await Shops.findByIdAndUpdate(req.id,{$push:{products:product.id}})

         res.json({status:true,msg:"Product creation successful",product})

    } catch (error) {
        res.json({status:false,msg:error.message,error:error})
    }
}

const GetProducts=async(req,res)=>{
    try {
        const products=await Products.find({
            $or: [
                { title: { $regex: req.query.search, $options: 'i' } },
                { brand: { $regex: req.query.search, $options: 'i' } },
                { description: { $regex: req.query.search, $options: 'i' } },
                { tdetails: { $regex: req.query.search, $options: 'i' } },
                { ntdetails: { $regex: req.query.search, $options: 'i' } },
                { subcategory: { $regex: req.query.search, $options: 'i' } },
            ]
        })
        res.json({status:true,products})

    } catch (error) {
        res.json({status:false,msg:error.message,error:error})

    }
}
const GetSingleProduct=async(req,res)=>{
    try {
        const product=await Products.findById(req.query.id).populate("shop").exec()
        res.json({status:true,product})

    } catch (error) {
        res.json({status:false,msg:error.message,error:error})

    }
}
module.exports={CreateProduct,GetProducts,GetSingleProduct}