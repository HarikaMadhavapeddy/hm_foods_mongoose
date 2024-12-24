const orderModel=require('../../model/order');
const addOrder=async (req,res)=>{
    try{
        const insertorder=new orderModel(req.body);
        await insertorder.save();
        res.json({msg: 'order added successfully', orderDetails:insertorder});
    }catch(error){
        res.json({msg:'failed to add order',error});
    }
}
module.exports=addOrder;