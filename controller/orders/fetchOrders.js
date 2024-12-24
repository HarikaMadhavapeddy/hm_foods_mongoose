const order=require('../../model/order');
const fetchOrders= async (req,res)=>{
   
try{
    const data=await order.find({uId:req.params.userid});
    res.json(data);
}catch(error){
    res.json({msg: 'error fetching fooditems',error});
}
}
module.exports=fetchOrders;