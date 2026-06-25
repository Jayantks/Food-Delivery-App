import mongoose from "mongoose";

export const connectDB=async()=>{
  try {
    await mongoose.connect('mongodb+srv://amansharma:6299914507@cluster0.yuaexpg.mongodb.net/fooddel').then(()=>console.log("DB connected"));
  } catch (error) {
    console.error("MDB Atlas connection failed:", error.message);
    try {
      console.log("Attempting to connect to local MongoDB...");
      await mongoose.connect('mongodb://127.0.0.1:27017/fooddel');
      console.log("Local DB connected");
    } catch (localError) {
      console.error("Local DB connection also failed. Continuing without database connection.");
    }
  }
}