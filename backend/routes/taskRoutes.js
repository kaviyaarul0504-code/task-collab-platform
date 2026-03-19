const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// create task
router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// get all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// delete task
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
