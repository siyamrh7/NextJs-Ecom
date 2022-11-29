const Users=require('../models/Users')
const jwt=require('jsonwebtoken')
const Shops=require('../models/Shops')
const AuthenticateUser=async(req,res,next)=>{
    try {
     const token=req.headers.authorization
     const user=jwt.verify(token,process.env.JWT_SECRET)
     const find=await Users.findOne({id:user.id})
     if(!find){
         return res.json({status:false,msg:"Authentication Failed"})
     }
     req.id=user.id
     req.user=user
     next()
    } catch (error) {
        return res.json({status:false,error:error.message,error,msg:"Authentication error"})
    }
}
const AuthenticateShop=async(req,res,next)=>{
    try {
     const token=req.headers.authorization
     const shop=jwt.verify(token,process.env.JWT_SECRET)
     const find=await Shops.findOne({id:shop.id})
     if(!find){
         return res.json({status:false,msg:"Authentication Failed"})
     }
     req.id=shop.id
     req.shop=shop
     next()
    } catch (error) {
        return res.json({status:false,error:error.message,error,msg:"Authentication error"})
    }
}
module.exports={AuthenticateUser,AuthenticateShop}