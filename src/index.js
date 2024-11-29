import dotenv from "dotenv"
import {app} from './app.js'
import connectDB from "./db/index.js";
import bodyParser from "body-parser";
import signup from "./controller/signup.js";



dotenv.config({
    path: './.env'
})

app.use(bodyParser.json());

// Route
app.post("/signup", signup);

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";

/*
const app = express();
const PORT = 3000;


(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on(error, (error) => {
            console.log("Errr: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`server is running on ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Error: ", error)
        throw err
    }
})()


*/