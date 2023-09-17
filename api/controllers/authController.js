import User from "../models/user_model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"
import  jwt  from "jsonwebtoken"

export const signup=async(req,res,next)=>{
    console.log(req.body)
    const {userName, email, password}=req.body;
    const hashedPassword= bcryptjs.hashSync(password,4);
    const newUser= new User({userName,email,password:hashedPassword});
    try{
        await newUser.save();

        res.status(201).json({message:"User created/added to the db successfully"})

    }
    catch(err){next(err);}
}

export const signin=async(req,res,next)=>{
    const {email,password}=req.body;
    console.log(req.body)
    try{
        const validUser= await User.findOne({email});
        if(!validUser) return next(errorHandler(404,"user Not found"));
        const validPassword=bcryptjs.compareSync(password,validUser.password);
        if(!validPassword)return next(errorHandler(404,"wrong credentials"));
        const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        const {password:hashedPassword,...rest}=validUser._doc
        const expiryDate=new Date(Date.now()+360000);
        res.cookie("access_token",token,{httpOnly:true, expires:expiryDate}).status(200).json(rest )


    }catch(error){
        next(error);
    }
}