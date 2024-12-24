const mongoose= require("mongoose");

const orderSchema=new mongoose.Schema({
    uId:{type:String,required:true},
    TotalPrice:{type:Number,required:true},
    address:{
        city:{type:String,required:true},
        house_number:{type:Number,required:true},
        state:{type:String,required:true},
        postcode:{type:String,required:true}
    },
    items:[{
        _id:{type:String,required:true},
        category:{type:String,required:true},
        description:{type:String,required:true},
        image:{type:String,required:true},
        name:{type:String,required:true},
        price:{type:Number,required:true},
        quantity:{type:Number,required:true}
    }],
    orderDate:{type:String,required:true},
    orderId:{type:String,required:true},

},{versionKey:false});
module.exports=mongoose.model('orders',orderSchema);