//acquiring packages
require("dotenv").config();
const express  =require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet")



const app =express();
//middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

//connecting db
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true}, function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Database connected successfully")
    }
});

//server
app.listen(process.env.PORT || 5000, (req,res)=>{
    console.log("Backend Server running on port 5000")
})