import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import cookieParser from "cookie-parser"
import path from "path";
dotenv.config();


mongoose.connect(process.env.Mongo_path).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
})
const app=express()
app.use(express.json());
app.use(cookieParser())
const __dirname=path.resolve();

app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

app.listen(3000,()=>{
    console.log("Hi terhe i am acive!")
})


app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode ||500;
    const message= err.message ||"internal Server Error";
    return res.status(statusCode).json({
        sucess:false,
        error:message,
        statusCode:statusCode,
    })
})