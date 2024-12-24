const foodItem = require('../../model/foodItem');
const deleteItem=async (req,res)=>{
try{
 const Item=await foodItem.findByIdAndDelete(req.params.id);
 console.log(Item);
 if(!Item){
    return res.json({message:'item not found'});
 }else {
    res.json({message:'Item is deleted successfully'});
 }

}catch(error){
res.json({message:'Error deleting item'});
}
}
module.exports=deleteItem;