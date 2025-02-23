
import cors from "cors"
import cookieParser from "cookie-parser"
 
// creating app
import express from "express"
const app = express()



//middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true        
}))
app.use(express.json({limit:"16kb"})) //ye data ko jason me leta he
app.use(express.urlencoded({extended:true,limit:"16kb"}))  // ye url se aye huye data ko handle karta he
app.use(express.static("public")) //public folder ke andar store kari gayi files,folder or images ka access dilwayega
app.use(cookieParser()) //securly kese user ke browser ki cookies ko read and remove kar paye



export { app }  // exporting app