const express = require("express");
const { CreateCategory, GetCategories, GetCategory, GetProductBySubCategory } = require("./controllers/CategoriesCtrl");
const { CreateProduct, GetProducts, GetSingleProduct } = require("./controllers/ProductCtrl");
const { CreateShop, LoginShop } = require("./controllers/ShopCtrl");
const { CreateUser ,LoginUser, GetUser} = require("./controllers/UsersCtrl");
const {AuthenticateUser,AuthenticateShop} = require("./middlewares/Authenticate");
const Upload = require("./middlewares/Upload");

const Router= express.Router()

// Router.get('/sellerauth',AuthenticateUser,(req,res)=>{
//     res.send(req.user)
// })

// Router.get('/buyerauth',AuthenticateUser,(req,res)=>{
//     res.send(req.user)
// })

// Router.post('/createservice',AuthenticateUser,Upload.single("image"),CreateServiceCtrl)
// Router.get('/services',GetServicesCtrl)
// Router.get('/seller',GetUser)

// Router.get('/service',GetServiceCtrl)
Router.get('/product',GetSingleProduct)

Router.get('/getproductbycategory',GetCategory)
Router.get('/getproductbysubcategory',GetProductBySubCategory)

Router.get('/getproductbysearch',GetProducts)
Router.get('/getcategory',GetCategories)

Router.post('/createproduct',AuthenticateShop,Upload.array("images"),CreateProduct)
Router.post('/createcategory',AuthenticateShop,Upload.single("image"),CreateCategory)

Router.post('/createshop',CreateShop)
Router.post('/loginshop',LoginShop)

Router.post('/createuser',CreateUser)
Router.post('/loginuser',LoginUser)

module.exports=Router