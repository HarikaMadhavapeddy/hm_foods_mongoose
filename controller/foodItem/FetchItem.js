const foodItems=require('../../model/foodItem');
const fetchItems= async (req,res)=>{
try{
    const data=await foodItems.find();
    res.json(data);
}catch(error){
    res.json({msg: 'error fetching fooditems',error});
}
}
module.exports=fetchItems;