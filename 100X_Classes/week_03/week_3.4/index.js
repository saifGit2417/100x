const jwt = require("jsonwebtoken");

const values = {
  email: "saif@ntt.com",
  password: "saif@123",
};

const jwtPassword = "123123";

// jwt password which needed to create jwt should only be string
const newToken = jwt.sign(values, jwtPassword);
console.log("token: ", newToken);


// verify jwt by passing jwt value and password to decode , sam epassword thta has been used while at time of creation
const verifyToken = jwt.verify(newToken, jwtPassword);
console.log("verifyToken: ", verifyToken);
