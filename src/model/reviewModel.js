const mongoose=require('mongoose')
const { modelName } = require('./bookModel')
const ObjectId=mongoose.Schema.Types.ObjectId

const reviewSchema=new mongoose.Schema({
    "bookId": {type:ObjectId, required:true, ref:"book"},
    "reviewedBy": {type:String,required:true, default:'Guest'},
    "reviewedAt": {Date, required:true},
    "rating": {type:Number,  required:true},//min 1, max 5,
    "review": {type:String},
    "isDeleted": {type:boolean, default:false},
},{timestamps:true})


module.exports=mongoose.model("review","reviewSchema")