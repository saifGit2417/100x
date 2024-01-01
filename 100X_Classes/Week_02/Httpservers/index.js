import express from "express";
import bodyParser from "body-parser";
// import { dataArray } from "./Data.js";
import Fs from "fs";
const app = express();
// both below libraries for body parsing from req body
// app.use(express.json()); /// middleware to read req body
app.use(bodyParser.json()); /// middleware to read req body
const portNumber = 7000;

// create a todo app that lets users store to dos on the servers
// create simple http servere in c from scartch

// let resultArray = [];
// console.log('resultArray: ', resultArray);

app.get("/", (req, res) => {
  // res.send("hello world");
  // res.json({ name: "saif", age: 22 });
  res.send(dataArray);
});

app.listen(portNumber, () => {
  console.log("port running at ", portNumber);
});

app.post("/add", (req, res) => {
  console.log(req.body);
  let response = req.body;
  Fs.appendFile("Data.js", response, () => {
    res.end();
  });

  // dataArray.push(response);
});
