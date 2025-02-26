import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true //  kisi bhi field ko searchable banana he optimized tarike se to index true kar do
        },   
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        }, 
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        }, 
        avatar: {
            type: String, // cloudinary ka url use karege
            required: true
        },
        coverImage: {
            type: string // cloudinary ka url use karege
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ], 
        password: {
            type: String,
            required: [true, 'Password is required']
        }, 
        refreshToken: {
            type: string
        }
    },
    {
       timestamps: true 
    }
)

// 'pre' hook:-  password hashing or compare
userSchema.pre("save" , async function(next){
    if(!this.isModified("password")) return next(); // agar password modified nahi hua to yahi se pre hook kke bahar fek dega age vala code run hi nahi hoga

    this.password = bcrypt.hash(this.password , 10)
    next() // call karvana jaruri he
})// yaha tak to password encrypt hua he ab user jo password dalega use match kese karvayge kyoki password to encrypted he
// custom method for password matching or password correction
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password , this.password)
} 

// jwt access token generation (ham yaha async await nahi use karte ye fast ho jata he)
userSchema.methods.generateAccessToken = function(){
    //async/await lagane ki jarurat nahi he but chahe to laga dena
    return jwt.sign(
        //payload
        {
            _id: this._id, // yaha this ka use karke mongodb se id le rahe he
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        //access token jo env file me tha
        process.env.ACCESS_TOKEN_SECRET,
        // expiry object
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

// jwt refresh token generation (ham yaha async await nahi use karte ye fast ho jata he)
userSchema.methods.generateRefreshToken = function(){
     //async/await lagane ki jarurat nahi he but chahe to laga dena
     return jwt.sign(
        //payload
        {
            _id: this._id, // yaha this ka use karke mongodb se id le rahe he
        },
        //refresh token jo env file me tha
        process.env.REFRESH_TOKEN_SECRET,
        // expiry object
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
)} 



export const User = mongoose.model("User",userSchema)   