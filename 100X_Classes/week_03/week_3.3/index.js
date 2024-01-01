const express = require("express");

const app = express();

// middleware to check age before executing next thing
const oldEnough = (req, res, next) => {
  let age = req.query.age;
  if (age >= 18) {
    next();
  } else {
    res.status(400).json({
      msg: "not old enough to ride this",
    });
  }
};

// use middleware globally > it will execute on each router after this line
app.use(oldEnough);

app.get("/ride1", (req, res) => {
  res.send("enjoy your ride 1");
});

app.get("/ride2", (req, res) => {
  res.send("enjoy your ride 2");
});

app.listen(3000, () => {
  console.log("port running");
});
