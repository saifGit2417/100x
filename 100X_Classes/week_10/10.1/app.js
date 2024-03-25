import express from "express";
import { client, deleteAllData, insertData } from "./tables/user.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi from node app");
});

app.post("/addUser", async (req, res) => {
  // name , address,phoneNumber,age
  const { name, address, phoneNumber, age } = req.body;
  try {
    await insertData(name, address, age, phoneNumber);
    res.send("new entry data added successfully");
  } catch (error) {
    console.log("error in add user: ", error);
  } finally {
    client.end();
  }
});

app.delete("/", async (req, res) => {
  let result = await deleteAllData();
  console.log("result: ", result);
  res.send("all data deleted successfully");
});

app.listen(9989, () => {
  console.log("port running at 9989");
});
