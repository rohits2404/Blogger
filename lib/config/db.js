import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Blog:Rohit2503@cluster0.jm28j3l.mongodb.net/blog-app');
    console.log("DB Connected");
}