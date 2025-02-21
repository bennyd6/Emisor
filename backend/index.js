import express from "express";
import 'dotenv/config'
import connectDB from "./db.js"
import authRoutes from "./routes/authRouters.js";


const app=express();
const port=3000;
app.use(express.json()); 

 connectDB();
 
// const connectUrl=process.env.mongoUrl;
app.use("/api/auth", authRoutes);
app.listen(port,()=>
{
    console.log(`Server is running at ${port}`);
})

