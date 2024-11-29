import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import insertData from "../models/insertData.js";



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        // insertData()
     

    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB

// connectDB()
//     .then(() => {
//         console.log("MongoDB connected successfully!");
//         insertData(); // Ye function call karo
//     })
//     .catch((err) => {
//         console.error("Database connection failed:", err);
//     });
