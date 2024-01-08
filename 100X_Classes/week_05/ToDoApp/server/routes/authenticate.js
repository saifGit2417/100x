const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const { User } = require("../db/index");
const {
  authenticateBody,
  existingEmail,
} = require("../middleware/authenticate_middleware");
const jwtSecretKey = require("../constants.js");

router.use(authenticateBody);

router.post("/signUp", existingEmail, async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const createNewUser = await User({
      userId: uuid(),
      username,
      email,
      password,
    });
    createNewUser.save().then((data) => {
      res.json({
        message: "New User Created Successfully",
      });
    });
  } catch (error) {
    console.log("signUp error: ", error);
  }
});

router.post("/login", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const verifyUser = await User.findOne({ username, email, password });
    if (verifyUser) {
      const createJwtToken = jwt.sign({ email }, jwtSecretKey);
      res.json({
        message: "Login Successfully",
        severity: "success",
        auth_token: createJwtToken,
      });
    } else {
      res.json({
        message: "something went wrong",
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
});

module.exports = router;
