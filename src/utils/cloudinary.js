import {v2 as cloudinary} from "cloudinary" //yaha ham v2 ko apna custom name de sakte he
import fs from "fs"



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: '', 
        api_secret: '' // Click 'View API Keys' above to copy your API secret
    });