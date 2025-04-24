const express = require("express");
const User = require("../models/User");
const { protect } = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");

const router = express.Router();

//@Route Post /api/users/register
// @desc Register a new user
//@accessing Request Will Be Public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //Registration Logic
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User Already Exist..." });

    user = new User({ name, email, password });
    await user.save();

    //Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    //Sign And Returning The Token Data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;

        //Send The User And Token In Response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//@Route Post /api/user/Login
//@desc Authenticate The User
//@Accessing The Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    //Find THe User By Email
    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid Credentials" });
    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    //Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    //Sign And Returning The Token Data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;

        //Send The User And Token In Response
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//@route GET /api/users/profile
//@desc Getting The Logged-in USer's profile
//@Accessing Private
router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
