require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const portNumber = process.env.PORT || 8000;
const ToDoRouter = require("./routes/toDo");
const Authenticate = require("./routes/authenticate");

app.use(cors());
app.use(express.json());

app.use("/todo", ToDoRouter);
app.use("/authenticate", Authenticate);

app.listen(portNumber, () => {
  console.log(`port running at ${portNumber}`);
});

