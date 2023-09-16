import User from "../models/user_model.js"
import bcryptjs from "bcryptjs"
export const signup=async(req,res)=>{
    console.log(req.body)
    const {userName, email, password}=req.body;
    const hashedPassword= bcryptjs.hashSync(password,4);
    const newUser= new User({userName,email,password:hashedPassword});
    try{
        await newUser.save();

        res.status(201).json({message:"User created/added to the db successfully"})

    }
    catch(err){res.status(500).json(err.message);}
}