
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
 

const app = express() // creating app




//middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true        
}))

// data kis form me ata he
app.use(express.json({limit:"16kb"})) //ye data ko json me leta he ;jaha hamne limit laga di taki server crash na ho
app.use(express.urlencoded({extended:true,limit:"16kb"}))  // ye url se aye huye data ko handle karta he
app.use(express.static("public")) //public folder ke andar store kari gayi files,folder or images ka access dilwayega
app.use(cookieParser()) //securly kese user ke browser ki cookies ko read and remove kar paye (crud operation kar paye)



export { app }  // exporting app