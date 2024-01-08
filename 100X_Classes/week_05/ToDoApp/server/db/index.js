require("dotenv").config();
const mongoose = require("mongoose");
const dbPath = process.env.DBURL;

const dbUrl = "mongodb://localhost:27017/todoApplication";

mongoose.connect(dbUrl).then(() => {
  console.log("db connected successfully");
});

const toDoSchema = new mongoose.Schema({
  todo: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const user = new mongoose.Schema({
  userId: String,
  username: String,
  email: String,
  password: String,
});

const ToDo = mongoose.model("TodoApp", toDoSchema);
const User = mongoose.model("User", user);

module.exports = { ToDo, User };
