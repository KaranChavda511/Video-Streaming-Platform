/**
 * Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
    * NOTE: Multer will not process any form which is not multipart (multipart/form-data).
 */
import multer from "multer"



// file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) // yaha pe apko file . karke bahot option milte he 
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  
export const upload = multer({ 
    storage,
})
