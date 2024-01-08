const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const { User } = require("../db/index");
const {
  existingEmail,
  authenticateSignUpBody,
  authenticateLoginBody,
} = require("../middleware/authenticate_middleware");
const jwtSecretKey = require("../constants.js");

router.post(
  "/signUp",
  authenticateSignUpBody,
  existingEmail,
  async (req, res) => {
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
          severity: "success",
        });
      });
    } catch (error) {
      console.log("signUp error: ", error);
    }
  }
);

router.post("/login", authenticateLoginBody, async (req, res) => {
  const { email, password } = req.body;

  try {
    const verifyUser = await User.findOne({ email, password });
    if (verifyUser) {
      const createJwtToken = jwt.sign({ email }, jwtSecretKey);
      res.json({
        message: "Login Successfully",
        severity: "success",
        auth_token: createJwtToken,
      });
    } else {
      res.status(400).json({
        message: "no user found",
        severity: "warning",
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
});

module.exports = router;
