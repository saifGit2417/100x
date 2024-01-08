const { z } = require("zod");
const { ToDo, User } = require("../db/index");
const jwt = require("jsonwebtoken");
const jwtSecret_key = require("../constants");

const todoSchema = z.object({
  todo: z.string().min(1),
});
function checkReqBody(req, res, next) {
  const { todo } = req.body;
  try {
    let validateToDoString = todoSchema.safeParse({ todo });
    if (validateToDoString.success) {
      next();
    } else {
      res.status(200).json({ message: validateToDoString });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

async function checkExistingToDo(req, res, next) {
  const { todo } = req.body;
  try {
    let checkExist = await ToDo.findOne({ todo });
    if (checkExist) {
      res.status(200).json({
        message: `task is already there  , duplicate entry of task are not allowed`,
        severity: "warning",
      });
    } else {
      next();
    }
  } catch (error) {
    res.json({ error });
  }
}

async function checkTaskId(req, res, next) {
  const { id } = req.params;

  try {
    let idExist = await ToDo.findOne({ _id: id });
    if (idExist) {
      next();
    } else {
      res.json({ message: `No task is there with ${id}` });
    }
  } catch (error) {
    res.json({ error });
  }
}

async function verifyJwtFromHeaders(req, res, next) {
  const { authorization } = req.headers;
  let jwtToken = authorization.split(" ")[1];

  try {
    const verifyJwtBySecret = jwt.verify(jwtToken, jwtSecret_key);
    const emailFromJwt = verifyJwtBySecret.email;
    const verifyUserExist = await User.findOne({ email: emailFromJwt });
    if (verifyUserExist) {
      next();
    } else {
      res.json({
        message: "jwt verification failed",
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
}

module.exports = {
  checkReqBody,
  checkExistingToDo,
  checkTaskId,
  verifyJwtFromHeaders,
};
