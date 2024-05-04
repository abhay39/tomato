import mongoose from "mongoose"

const UserModel=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        minLength:5
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true});

const User=mongoose.models.User || mongoose.model("User",UserModel);

export default User;