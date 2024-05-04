const { default: mongoose } = require("mongoose");

const OrderModel=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"User",
    },
    email:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    street:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    zipCode:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    contactNumber:{
        type:String,
        required:true,
    },
    orderItems:{
        type:Array,
        required:true,
    },
    orderTotal:{
        type:Number,
        required:true,
    },
    deliveryCost:{
        type:Number,
        required:true,
    },
    orderStatus:{
        type:String,
        enum:['order placed','order preparing','out for payment','order completed'],
        default:'order placed',
    }
},{timestamps:true})

const Order=mongoose.models.Order || mongoose.model("Order",OrderModel);

export default Order;