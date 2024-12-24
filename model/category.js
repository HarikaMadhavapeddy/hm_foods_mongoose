const mongoose  = require("mongoose");

const categorySchema=new mongoose.Schema({
    menu_image:{type:String,required:true},
    menu_name:{type:String,required:true},
},{versionKey:false});
module.exports=mongoose.model('category',categorySchema);