import {app} from "./app.js"  // iske bina ham app. ka use nahi kar payge

// dotenv ko config karvaya he.
// require('dotenv').config({path:'./env'}) // ye to commonjs ka syntax aa gaya he but hame to moduleJs use kar rahe he (run to hoga ,but hame aur improved code version chahiye)
import dotenv from "dotenv" // ye import kiya he , config niche karvayge
dotenv.config(); // environment variables load

// DB function ko bhi import karvana padega
import connectDB from "./db/index.js" //yaha extension imp he.


// DB connection function call.
connectDB()
.then(() => {
    app.on("error",(error)=>{
        console.log("ERROR",error);
        throw error
    })
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);  
    })
}).catch((err) => {
    console.log("Mongodb connection failed",err);
    
});
