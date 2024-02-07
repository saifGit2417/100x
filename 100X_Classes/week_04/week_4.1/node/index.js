const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/sum", (req, res) => {
  console.log(req.query);
  const { a, b } = req.query;
  let sum = parseInt(a) + parseInt(b);
  res.status(200).send(sum.toString());
});

app.get("/returns", (req, res) => {
  const { amount, duration, rate } = req.query;
  const returnOnInvestment =
    parseInt(amount) * parseInt(duration) * parseInt(rate);
  console.log("returnOnInvestment: ", returnOnInvestment);
  res.send(returnOnInvestment.toString());
});
app.listen(8765, () => {
  console.log(`port running ${8765}`);
});
