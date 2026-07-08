const mongoose = require('mongoose');


async function connectDB() {
    await mongoose.connect("mongodb+srv://Huz:4u2vpWjknO1XQd2a@backendtutorial.35nmq3f.mongodb.net/project1");
        console.log("Connected to DB");

}

module.exports = connectDB;