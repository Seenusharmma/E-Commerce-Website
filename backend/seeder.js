const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");

dotenv.config();

//Connecting To The MongoDb
mongoose.connect(process.env.MONGO_URI);

//Function To Seed The Data
const seedData = async () => {
  try {
    //Clear Existing Data
    await Product.deleteMany();
    await User.deleteMany();

    //Create A Default Admin User
    const createdUser = await User.create({
        name: "Admin User",
        email: "admin@gmail.com",
        password: "12345678",
        role: "admin",
    });

    // Assign The Default User ID To Each Product
    const userID = createdUser._id;

    const sampleProducts = products.map((product) => {
        return {...product, user: userID}
    })

    //Insert The Products In The DB
    await Product.insertMany(sampleProducts)

    console.log("Product Data Seeded Successfully!")
    process.exit();

  } catch (error) {
    console.error("Error Seeding The Data:", error);
    process.exit(1);
  }
};

seedData();
