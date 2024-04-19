import express from "express";
import { z } from "zod";

const app = express();

app.use(express.json());

const userUpdateSchema = z.object({
  userName: z.string(),
  email: z.string().email(),
  address: z.string().min(6).max(200),
});

app.put("/updateDetails", (req, res) => {
  const { userName, email, address } = req.body;
  let result = userUpdateSchema.safeParse(req.body);
  console.log("result: ", result);
  if (result.success) {
    res.send(result);
  } else {
    res.send("schema validation failed");
  }
});

app.listen(3003, () => {
  console.log("port running at 3003");
});
