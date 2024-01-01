const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const portNumber = process.env.PORT_NUMBER || 3000;
const DATABASE_URL =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/your-database";
app.use(express.json());

// connect with db using mongoose
mongoose.connect(DATABASE_URL).then(() => {
  console.log("mongoose connected successfully");
});

//  creating  schema explicitly for better code readability
const UserSchema = new mongoose.Schema({
  userName: String,
  password: String,
  email: String,
});

// create model defining what would be collection name inside data base and define its schema that we made above this
const Users = mongoose.model("usersTable", UserSchema);

// creating end point to signup user
app.post("/signup", async (req, res) => {
  // destructure req body instead of using req.body method for each thing
  const { userName, password, email } = req.body;

  // checking if any user with same email exists in our table
  let existingUser = await Users.findOne({ email });

  // if user exists with same email return error , cant have more than one user with same email id
  if (existingUser) {
    return res.status(400).json({
      msg: `Email is already registered with us, please try a different email to register`,
    });
  }

  // adding new user to Users collection
  const addUser = new Users({
    userName,
    password,
    email,
  });

  // without doing .save it wont save entry in db
  addUser.save().then(() => {
    res.json("new entry added to DB");
  });
});

app.listen(portNumber, () => {
  console.log("port running at ", portNumber);
});
