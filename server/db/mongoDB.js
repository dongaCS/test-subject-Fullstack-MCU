const mongoose = require(`mongoose`);
require(`dotenv`).config();

mongoose.set(`strictQuery`, false);

async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected")
    } catch (err) {
        console.log(`connection ${err}`)
    }
}

module.exports = { connectMongoDB };