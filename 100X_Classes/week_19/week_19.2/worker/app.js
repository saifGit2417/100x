import { createClient } from "redis";
const redisClient = createClient();

async function listenToRedisQueue() {
  try {
    await redisClient.connect();
    console.log("redis client connected");

    while (1) {
      // this rpop name should match to lpush name that we send from node js server
      const response = await redisClient.brPop("submission",0);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("response from worker picking up tasks",response)
    }
  } catch (error) {}
}

listenToRedisQueue();
