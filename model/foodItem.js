const mongoose = require("mongoose");
const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category:{type: String, required: true},
  description:{type: String, required: true},
  image:{type: String, required: true},

},{versionKey:false});
module.exports=mongoose.model('foodItems',foodItemSchema);
