//DB imports
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; // js ka extension imp he



//  DB CONNECTION KE LIYE EK FUNCTION BANA DETE HE.(do tarike hote he ek async..await or normal fun)
const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // console.log(connectionInstance.connection.host); ye hame host dikhata he , isko aur better likh sakte he
        console.log(`\n MONGODB successfully connected & DB Host:${connectionInstance.connection.host} `);
        
    } catch (error) {
        console.log("MONGODB connection failed :",error);
        process.exit(1)
        
    }
}

//  DB CONNECTION KE FUNCTION ko export karvate he.
export default connectDB;
