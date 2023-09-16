import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
dotenv.config();


mongoose.connect(process.env.Mongo_path).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
})

const app=express()
app.listen(3000,()=>{
    console.log("Hi terhe i am acive!")
})

app.use("/api/user",userRoutes);