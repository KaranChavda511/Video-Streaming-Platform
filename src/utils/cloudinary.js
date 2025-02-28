import {v2 as cloudinary} from "cloudinary" //yaha ham v2 ko apna custom name de sakte he
import fs from "fs"



// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_NAME, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});                                               
 
// Upload an image
const uploadOnClodinary = async(localFilePath) => {
    try {
        if(!localFilePath) return null;
        // upload file on clodinary
        const response = await cloudinary.uploader.upload( localFilePath , {
            resource_type: "auto"
        })
        // file uploaded successfully
        console.log("File is Successfully uploaded on Cloudinary", response.url);
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove locally saved temporary file as the upload operation got failed
        return null;
    }
} 



export {uploadOnClodinary};