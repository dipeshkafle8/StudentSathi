const { User } = require("../model/DbSchema");

async function handleSignUp(req, res) {
  try {
    const userData = req.body;

    console.log(userData);
    await User.create(userData);
    res.status(201).json({ status: true, msg: "User created successfully" });
  } catch (err) {
    console.error(err);
    // Send failure response
    res.status(400).json({ status: false, msg: "Unable to create User" });
  }
}

async function handleLogin(req, res) {
  try {
    const userData = req.body;
    console.log(userData);
    const user = await User.find({
      username: userData.username,
      password: userData.password,
    });
    if (user.length > 0) {
      // If user exists, send success response with username
      res
        .status(200)
        .json({ status: true, user: user, msg: "Successfully Logged In" });
    } else {
      // If user doesn't exist, send failure response
      res.status(404).json({ status: false, msg: "User doesnot exists" });
    }
  } catch (error) {
    console.error(err);
    res.status(400).json({ status: false });
  }
}

module.exports = {
  handleLogin,
  handleSignUp,
};
