import express from "express";
import { createClient } from "redis";
const app = express();
app.use(express.json());
const redisClient = createClient();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/submit", async (req, res) => {
  const { problemId, problemStatement, solution, noOfTrials } = req.body;
  try {
    // push to redis que using lpush
    // if wants to verify is this data received it or not go to docker container in interactive mode and run RPOP tosee this data received or nor
    // to push things multiple times we can mimick it using loop
    for (let i = 0; i < 10; i++) {
      await redisClient.lPush(
        "submission",
        JSON.stringify({ problemId: i, problemStatement, solution, noOfTrials })
      );
    }
    console.log("lpush added");
    res.json("submission received");
  } catch (error) {
    console.log(error);
  }
});

// make async connection to redis and start express server
async function startRedis() {
  try {
    await redisClient.connect();
    console.log("redis client connected");
    app.listen(3000, () => {
      console.log("app running on 3000");
    });
  } catch (error) {
    console.log(error);
  }
}

startRedis();
