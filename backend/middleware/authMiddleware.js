const jwt = require("jsonwebtoken");
const User = require("../models/User");

//Adding Middleware To Protect Routes
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.user.id).select("-password"); //Exclude Password
      next();
    } catch (error) {
      console.error("Token Verification Failed:", error);
      res.status(401).json({ message: "Not Authorized, Token Failed" });
    }
  } else {
    res.status(401).json({ message: "Not Authorized, No Token Provided" });
  }
};

//Middleware To Check If The User Is An Admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Not Authorized As An Admin" });
  }
};

module.exports = { protect, admin };
