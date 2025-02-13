// dotenv ko config karvaya he.
// require('dotenv').config({path:'./env'}) // ye to commonjs ka syntax aa gaya he but hame to moduleJs use kar rahe he (run to hoga ,but hame aur improved code version chahiye)
import dotenv from "dotenv" // ye import kiya he , config niche karvayge
import connectDB from "./db/index.js" //yaha extension imp he.
dotenv.config({
    path:'./env'
})

// DB connection function call.
connectDB();

/** 
// DB CONNECTION (APPPROACH #1: DIRECTLY IN INDEX.JS)
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
// EXPRESS APP
import express from "express";
const app = express()
*/



/** 
// DB CONNECTION (APPPROACH #1: DIRECTLY IN INDEX.JS)
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // EXPRESS APP: Setting up Express error handling
        app.on("error",(error)=>{
            console.log("ERROR",error);
            throw error
        })
            // EXPRESS APP: Starting the Express server
        app.listen(process.env.PORT,() => {
            console.log(`APP IS LISTENING ON PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:",error)
        throw error
    }
})()
*/