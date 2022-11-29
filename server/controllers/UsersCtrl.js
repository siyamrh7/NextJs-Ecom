const Users=require('../models/Users')
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')

const CreateUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        if(!name || !email || !password  ){
            return res.json({status:false,msg:"Invalid Creadentials"})
        }
        
        const find2 = await Users.findOne({email})
        if(find2){
            return res.json({status:false,msg:"User already available with this email"})
        }
         const hashpass=await bcrypt.hash(password,10)
        const user=await Users.create({name,email,password:hashpass})
         res.json({status:true,msg:"Account creation successful,Wait for confirmation",user})

    } catch (error) {
        res.json({status:false,msg:error.message,error:error})
    }

}

const LoginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        const find = await Users.findOne({email})
        if(!find){
         return res.json({status:false,msg:"User doesn't exist"})
        }
        const check= await bcrypt.compare(password,find.password)
        if(!check){
            return res.json({status:false,msg:"Password doesn't matched"})
        }
        const token = jwt.sign({user:find,id:find._id},process.env.JWT_SECRET,{expiresIn:'7d'})
        res.json({status:true,msg:"Login Successfull",token})
    } catch (error) {
        res.json({status:false,msg:error.message,error:error})

    }
}


const GetUser=async(req,res)=>{
    try {
        const users=await Users.findById(req.query.id)
        res.json({status:true,msg:users})
    } catch (error) {
        res.json({status:false,msg:error.message,error:error})

    }
}

module.exports={CreateUser,LoginUser,GetUser}