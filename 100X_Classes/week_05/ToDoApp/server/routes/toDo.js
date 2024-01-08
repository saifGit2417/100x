const express = require("express");
const { ToDo } = require("../db/index");
const {
  checkReqBody,
  checkExistingToDo,
  checkTaskId,
  verifyJwtFromHeaders,
} = require("../middleware/todo_middleware");

const router = express.Router();
// middle ware to verify jwt from headers
router.use(verifyJwtFromHeaders);

router.get("/getAll", async (req, res) => {
  try {
    let readAllTasks = await ToDo.find();
    res.json({ tasks: readAllTasks });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/add", checkReqBody, checkExistingToDo, async (req, res) => {
  const { todo } = req.body;

  try {
    let addNewToDo = await ToDo.create({ todo });
    addNewToDo.save().then(() => {
      res.json({
        message: `New Task Created Successfully`,
        severity: "success",
      });
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.delete("/delete/:id", checkTaskId, async (req, res) => {
  const { id } = req.params;
  try {
    await ToDo.deleteOne({ _id: id });
    res.json({
      message: `Task deleted Successfully `,
      severity: "success",
    });
  } catch (error) {
    console.log("error: ", error);
  }
});

router.put("/update/:id", checkTaskId, async (req, res) => {
  const { id } = req.params;
  const { completed, todo } = req.body;

  try {
    ToDo.findOneAndUpdate({ _id: id }, { completed }).then((response) => {
      res.json({
        message: `Task status updated Successfully`,
        severity: "success",
      });
    });
  } catch (error) {
    console.log("error: ", error);
  }
});
router.put("/edit/:id", checkTaskId, async (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;

  try {
    ToDo.findOneAndUpdate({ _id: id }, { todo }).then((response) => {
      res.json({
        message: `Task edited Successfully`,
        severity: "success",
      });
    });
  } catch (error) {
    console.log("error: ", error);
  }
});

module.exports = router;
