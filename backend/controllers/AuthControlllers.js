import User from "../models/UserModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const listOfUsers=async(req,res)=>{
    const getUser= await User.findById(req.userId);
    if(getUser){
        res.json(getUser)
    }
    else{
        res.json({
            name:"Bimalesh"
        })
    }
}
export const signUpUser=async(req,res)=>{
    // console.log(req.body)
    const {fullName,email,password}=req.body;
    try{
        const checkIfExits=await User.findOne({
            email:email
        })
        if(checkIfExits){
            res.status(400).json({
                message:"User already exists"
            })
        }
        const hashedPassword= await bcrypt.hash(password,10)
        const newUser=new User({
            fullName,
            email,
            password:hashedPassword
        })
        const savedUser=await newUser.save();
        if(savedUser){
            res.status(201).json({
                message:"User created successfully!!"
            })
        }else{
            res.status(404).json({
                message:"Somethng went wrong!!"
            })
        }
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

export const signInUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({
            email:email
        })
        if(!user){
            res.status(404).json({
                message:"User not found"
            })
             return;
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400).json({
                message:"Invalid password"
            })
            return;
        }
        const token= jwt.sign({id:user._id},process.env.SECRETE_KEY,{
            expiresIn:'10d'
        })
        res.cookie('token', token, { 
            httpOnly: true, 
            secure: true, 
            sameSite: 'strict' 
        });
        return res.status(201).json({
            message:"User signed in successfully!!",
            token:token,
        })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
         return;
    }
}

