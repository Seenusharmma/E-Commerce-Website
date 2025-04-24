// Accessing The Needs
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

//Connect To The MongoDb Database
connectDB();

app.get("/", (req, res) => {
  res.send("WELCOME TO THE API TESTING...");
});

// Adding All API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server Is Running On http://localhost:${PORT}`);
});
