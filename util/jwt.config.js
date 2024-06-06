const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "24h" });
};

const verifyToken = (token) => {
  try {
    // verify token & return userId
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    return userId;
  } catch (error) {
    throw new Error("Invalid token");
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
