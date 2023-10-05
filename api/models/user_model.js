import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
    ,
    profilePicture:{
        type:String,
        default:"https://img.favpng.com/3/19/22/computer-icons-person-png-favpng-LCdUmsY83twN3VK0xYeuXREBP.jpg",
    }
},{timestamps:true});

const User=mongoose.model("User",userSchema);
export default User;