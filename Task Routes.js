const express = require("express");
const router = express.Router();
const Task = require("../Task");

// Get All Tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Create a New Task
router.post("/", async (req, res) => {
  const { name, date } = req.body;

  try {
    const newTask = new Task({
      name,
      date,
    });

    const task = await newTask.save();
    res.status(201).json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Update a Task
router.put("/:id", async (req, res) => {
  const { name, date, completed } = req.body;

  try {
    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    task.name = name || task.name;
    task.date = date || task.date;
    task.completed = completed !== undefined ? completed : task.completed;

    task = await task.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Delete a Task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    await Task.findByIdAndRemove(req.params.id);
    res.json({ msg: "Task removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
