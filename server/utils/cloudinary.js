const dotenv=require('dotenv')
const cloudinaryModule= require('cloudinary')
const  cloudinary=cloudinaryModule.v2
dotenv.config({path:'./server/config.env'})

cloudinary.config(
    {
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET

    }
)
module.exports=cloudinary;