import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv';
dotenv.config({ path: '../env' });

const connectDB =async()=>{
  try{
    const connectionInstance = await mongoose.connect(`mongodb+srv://admin:admin@cluster0.ly3mhdj.mongodb.net/}/${process.env.DB_NAME}`)
    console.log(`\n MongoDB connected!!! DB HOST : ${connectionInstance.connection.host}`);
  }
  catch(error){
    console.log("MONGODB Connection error",error);
    process.exit(1)

  }

}
export default connectDB