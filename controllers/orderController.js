const orderModel=require('../models/orderModels')
const productModel=require('../models/productModels')

exports.createOrder=async(req,res,next)=>{
   const cartItems=req.body;
   const amount =Number(cartItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0)).toFixed(2);
   const status='pending';

   const order =await orderModel.create({cartItems,amount,status})
//update stock product
cartItems.forEach(async(item)=> {
    const product= productModel.findById(item.product._id)
    product.stock=product.stock-item.qty;
    await product.save();
    
})
    res.json(
        {
            sucess:true,
            order
        }
    )
}