const ImageKit = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    privateKey : "private_P0ePFYXQ1lr/PfabtWP5iMi4Sg8="
})

async function uploadFile(buffer){
    const result = await imagekit.files.upload({
        file : buffer,
        fileName : "image.jpg"
    })
    return result;
}


module.exports = uploadFile;