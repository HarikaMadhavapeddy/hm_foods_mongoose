const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
},{versionKey:false});
module.exports=mongoose.model('testingDatabase',testSchema);