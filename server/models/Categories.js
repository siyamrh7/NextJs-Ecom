const mongoose = require('mongoose')

const categorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    subcategory:{
        type:Array,
        default:[]
        
    },
    products:[
        {type:mongoose.Schema.Types.ObjectId,ref:"Products"}
    ],
    image:{
      type:String,
      required:true
    }
   

},{timestamps:true})

const Categories= mongoose.model("Categories",categorySchema)

module.exports=Categories