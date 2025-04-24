const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connected Successfully...");
  } catch (err) {
    console.error("MongoDb  Connection Failded...", err);
    process.exit(1);
  }
};

module.exports = connectDB;