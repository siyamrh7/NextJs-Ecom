const Shops=require('../models/Shops')
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')

const CreateShop=async(req,res)=>{
    try {
        const {category,description,shopAddress,shopName,shopPhone,password}=req.body
        const find = await Shops.findOne({shopPhone})
        if(find){
            return res.json({status:false,msg:"Shop already available with this phone"})
        }
        const shop=await Shops.create({category,description,shopAddress,shopName,shopPhone,password})
         res.json({status:true,msg:"Account creation successful",shop})

    } catch (error) {
        res.json({status:false,msg:error.message,error:error})
    }

}

const LoginShop=async(req,res)=>{
    try {
        const {shopPhone,password}=req.body
        const find = await Shops.findOne({shopPhone})
        if(!find){
         return res.json({status:false,msg:"Shop doesn't exist"})
        }
        const check= password===find.password
        if(!check){
            return res.json({status:false,msg:"Password doesn't matched"})
        }
        const token = jwt.sign({shop:find,id:find._id},process.env.JWT_SECRET,{expiresIn:'7d'})
        res.json({status:true,msg:"Login Successfull",token})
    } catch (error) {
        res.json({status:false,msg:error.message,error:error})

    }
}


const GetShop=async(req,res)=>{
    try {
        const users=await Shops.findById(req.query.id)
        res.json({status:true,msg:users})
    } catch (error) {
        res.json({status:false,msg:error.message,error:error})

    }
}

module.exports={CreateShop,LoginShop,GetShop}