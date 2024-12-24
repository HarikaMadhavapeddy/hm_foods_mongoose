const stripe = require("stripe")(process.env.STRIPE_KEY);
const payment=async (req, res) => {
    try{
        const { orderItems,orderId } = req.body;
        const params = {
          mode: "payment",
          submit_type: "pay",
          payment_method_types: ["card"],
          billing_address_collection: "auto",
          shipping_options: [{ shipping_rate: "shr_1QU93SL1tCSuZkMjehKr4L3i" }],
          customer_email: "harika@gmail.com",
          line_items: orderItems.map((item) => {
            return {
              price_data: {
                currency: "usd",
                product_data: {
                  name: item.name,
                  images: [item.image],
                  metadata: { productId: item.name },
                },
                unit_amount: item.price*100,
              },
              quantity: item.quantity,
            };
          }),
          success_url: `${process.env.FRONT_END_URL}/paymentSuccess/${orderId}`,
          cancel_url: `${process.env.FRONT_END_URL}/paymentFail`,
        };
        const session = await stripe.checkout.sessions.create(params);
        console.log(orderItems, session);
        res.json(session);
    }catch(error){
        console.log(error);
    }
  
}
module.exports=payment;