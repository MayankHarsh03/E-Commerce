const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name:"di0tezl4a",
    api_key : "519477916228423",
    api_secret : "HSZQdUNlkWmwEIC1CenP8bqgNNY"
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file){
    const result = await cloudinary.uploader.upload(file,{
        resource_type : "auto",
    });

    return result;
}

const upload = multer({storage});

module.exports = {upload, imageUploadUtil};