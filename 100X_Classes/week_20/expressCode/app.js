import express from "express";
import swaggerUi from "swagger-ui-express";
import { openApiSpecDocument } from "./openApiSpec.js";

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());
// router.use("/api-docs", swaggerUi.serve);
// router.get("/api-docs", swaggerUi.setup(openApiSpecDocument));

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

app.get("/users", (req, res) => {
  const { name } = req.query;

  if (name) {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filteredUsers);
  } else {
    res.json(users);
  }
});

app.use('/documentation',swaggerUi.serve,swaggerUi.setup(openApiSpecDocument))

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
