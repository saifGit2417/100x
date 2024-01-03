const { z } = require("zod");
const { ToDo } = require("../db/index");

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

module.exports = { checkReqBody, checkExistingToDo, checkTaskId };
