const express = require("express");
const mongoose = require("mongoose");
const { collegeRoute } = require("./routes/collegeRoute");
const { userRoute } = require("./routes/userRoute");
const cors = require("cors");

require("dotenv").config();

let url = process.env.URL;
let port = process.env.PORT || 3000;

mongoose
  .connect(url)
  .then(() => {
    console.log("Mongodb Connect Successfully");
  })
  .catch((err) => {
    console.log("Error in connecting DB");
  });

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Handling routes
app.use("/getdata", collegeRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello I am sending Data");
});

app.listen(port, () => {
  console.log(`Server running successfully at port ${port}`);
});
