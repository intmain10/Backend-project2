import dotenv from 'dotenv';
dotenv.config({ path: './env' });
//import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js"


connectDB()








/*
import express from "express"
const app= express()
(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB-URL}/${DB_Name}`)
       app.on("error",(error)=>{
        console.log("ERRR:", error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })
    }
    catch(error){
        console.error("ERROR: ", error)
        throw err
    }
})()
*/