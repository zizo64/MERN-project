import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import userrouter from "./routes/user.route.js"
import authrouter from "./routes/auth.route.js"
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{console.log("connected to database")}).catch(err=>console.log(err))
const app=express()

const corsOptions = {
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,  
    allowedHeaders: ['Content-Type', 'Authorization'],  
  };

  app.use(cors(corsOptions)); 

app.use(express.json())
app.get("/", (req, res) => {
    res.send("Welcome to the home page!");
});

app.use("/api/user", userrouter)
app.use("/api/auth", authrouter)


app.listen(3000,()=>{
    console.log("app run at port 3000.....")
})
