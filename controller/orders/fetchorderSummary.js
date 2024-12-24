const order=require('../../model/order');
const fetchOrderSummary= async (req,res)=>{
 console.log(req.params.orderid);  
try{
    const data=await order.find({orderId:req.params.orderid});
    res.json(data);
}catch(error){
    res.json({msg: 'error fetching fooditems',error});
}
}
module.exports=fetchOrderSummary;