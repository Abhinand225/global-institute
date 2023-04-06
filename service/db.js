// import mongoose
// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
// state connection string via mongoose
mongoose.connect('mongodb://localhost:27017/Institute',{
    useNewUrlParser:true //avoid unwanted warning
})

const Apply=mongoose.model('Apply',{

    name:String,
    place:String,
    gender:String,
    email:String,
    number:Number,
    qualification:String,
    collegename:String,
    year:String
})

const Course =mongoose.model('Course',{
    id:Number,
    title:String,
    price:Number,
    duration:String,
    traininghours:String,
    descriptionhead:String,
    description:String,
    image:String

}) 

const User=mongoose.model('User',{

    name:String,
    number:Number,
    email:String,
    password:String
})

const View=mongoose.model('View',{

    id:Number,
    title:String,
    image:String,
    description:String,
    user:String
})



module.exports={
    User,
    Course,
    Apply,
    View
}