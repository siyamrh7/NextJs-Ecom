const mongoose = require('mongoose')

const adminSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   image:{
         type:String
   },
    phone:{
        type:String

    },
    shops: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Shops" }
    ]
},{timestamps:true})

const Admins= mongoose.model("Admins",adminSchema)

module.exports=Admins