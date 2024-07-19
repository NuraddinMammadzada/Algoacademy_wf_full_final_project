const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const dotenv = require('dotenv')
const cors = require('const')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO.URI,{
    useNewUrlParser:true,
    userUnifiedTopology:true
});

//Create user schema

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
})

const User = mongoose.model("User",userSchema)