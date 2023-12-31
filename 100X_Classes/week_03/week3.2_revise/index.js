const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  let isUser;
  let checkUserName = ALL_USERS.filter((data) => data.username === username)[0]
    ?.username;
  let checkPassword = ALL_USERS.filter((data) => data.password === password)[0]
    ?.password;
  if (checkUserName && checkPassword) {
    isUser = true;
  } else {
    isUser = false;
  }
  return isUser;
}

app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    console.log(username);
    // return a list of users other than this username
    // we are only returning names
    res.json({
      users: ALL_USERS.filter((data) => data.username !== username).map(
        (data) => data.name
      ),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => console.log("port running at", 3000));
