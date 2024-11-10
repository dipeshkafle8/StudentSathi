const express = require("express");
const { handleLogin, handleSignUp } = require("../controllers/loginSignUp");
const userRoute = express.Router();
userRoute.post("/login", handleLogin);

userRoute.post("/signup", handleSignUp);

module.exports = { userRoute };
