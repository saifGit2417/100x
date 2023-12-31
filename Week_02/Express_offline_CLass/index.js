const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
const portNumber = 9003;

const findSum = (n) => {
  let totalSum = 0;
  for (let i = 0; i <= n; i++) {
    totalSum += i;
  }
  return totalSum;
};

let users = [
  {
    name: "saif",
    kidneys: [{ healthy: "false" }, { healthy: "true" }],
  },
];

const findUnhealthyKidneys = () => {
  let unHealthyKidneys = users[0].kidneys.filter(
    (data) => data.healthy == "false"
  );
  return unHealthyKidneys;
};

app.get("/", (req, res) => {
  const userKidneys = users[0].kidneys;
  const numberOfKidneys = userKidneys.length;
  const healthyKidneys = userKidneys.filter(
    (kidney) => kidney.healthy == "true"
  );
  const numberOfHealthyKidneys = healthyKidneys.length;
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const entry = req.body;
  users[0].kidneys.push(entry);
  res.send("new kidney added");
});

app.put("/", (req, res) => {
  let unHealthyKidneys = findUnhealthyKidneys();
  if (!unHealthyKidneys.length > 0) {
    res.status(411).send("No un healthy kidney found to make it healthy it");
  }
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = "true";
  }

  res.json({ msg: "all unhealthy kidneys are now made healthy" });
});

app.delete("/", (req, res) => {
  let unHealthyKidneys = findUnhealthyKidneys();
  if (!unHealthyKidneys.length > 0) {
    res.status(411).send("No un healthy kidney found to remove it");
  }
  let healthyKidneys = users[0].kidneys.filter(
    (data) => data.healthy == "true"
  );
  users[0].kidneys = healthyKidneys;
  res.json({ msg: "all unhealthy kidneys had been removed" });
});

// app.get("/", (req, res) => {
//   const number = req.query.m;
//   let result = findSum(number);
//   res.send(result.toLocaleString());
// });

app.listen(portNumber, () => {
  console.log("port running at", portNumber);
});
