const express = require('express')
require('dotenv').config()
const mongoose= require('mongoose');
var bodyParser = require('body-parser');

const path=require('path')
const cors=require('cors')
const Router = require('./Routes');

const app=express()

const uri = process.env.MONGO_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
.then(res=>console.log("Database Connected")).catch(err=>console.log(err))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/uploads',express.static('./uploads'))

app.use('/api',Router)

app.listen(process.env.PORT,()=>{
    console.log("server is running on 2000")
})
