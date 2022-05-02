//acquiring packages
require("dotenv").config();
const express  =require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet")

///acquiring routes
const authRoute = require("./routes/auth");

const app =express();

//connecting db
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true}, function(err){
    if(err){
        console.log(err);
    } else{
        console.log("Database connected successfully")
    }
});

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("tiny"));


app.use("/api/auth", authRoute);


//server
app.listen(process.env.PORT || 5000, (req,res)=>{
    console.log("Backend Server running on port 5000")
})