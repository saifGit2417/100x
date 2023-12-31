const express = require("express");
const app = express();
const mongoose = require("mongoose");
const portNumber = 3000;

//  middle wares
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://saif1:PqKXa0gXCJevEoqf@cluster0.yjfo0fs.mongodb.net/100x_Db"
  )
  .then(() => {
    console.log("mongoose connected successfully");
  });

const Users = mongoose.model("usersTable", {
  userName: String,
  password: String,
  email: String,
});

app.post("/signup", async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  const email = req.body.email;

  let existingUser = await Users.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      msg: `Email is already registered with us, please try a different email to register`,
    });
  }

  const addUser = new Users({
    userName,
    password,
    email,
  });

  addUser.save().then(() => {
    res.json("new entry added to DB");
  });
});

app.listen(portNumber, () => {
  console.log("port running at ", portNumber);
});
