const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const dotenv = require('dotenv')
const cors = require('const')
const jwt = require("jsonwebtoken")

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO.URI, {
    useNewUrlParser: true,
    userUnifiedTopology: true
});

//Create user schema

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
})

const User = mongoose.model("User", userSchema)
const port = procces.env.PORT

app.post("/api/register", async (req, res) => {
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    try{
        const newUser = new User({username ,password:hashedPassword})
        await newUser.save()
        res.status(400).json({message:'adsf'})
    }catch(error){
        res.status(201).json({message: "errororo"})
    }
})
app.post("/api/login",async (req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.status(400).json({error:"invalid p"})

    }  
    const isPasswordvalid = await bcrypt.compare(password,user.password)
    if(!isPasswordvalid){
        return res.status(400).json({error:"invalid u "})
    }
    const token  = jwt.sign({id:user._id},procces.envSECRET_JWT)
    res.json(token)
})




app.listen(port, (req, res) => {
    console.log("sa")
})