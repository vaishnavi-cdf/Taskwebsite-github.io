import React, { useState } from "react";
import "./TaskManager.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const addTask = () => {
    if (taskName.trim() === "" || taskDate.trim() === "") return;
    const newTask = {
      id: Date.now(),
      name: taskName,
      date: taskDate,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskName("");
    setTaskDate("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const sortTasks = (status) => {
    return tasks.filter((task) => task.completed === status);
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        <h2>Incomplete Tasks</h2>
        {sortTasks(false).map((task) => (
          <div key={task.id} className="task-item">
            <span>{task.name}</span>
            <span>{task.date}</span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              Mark Complete
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
        <h2>Completed Tasks</h2>
        {sortTasks(true).map((task) => (
          <div key={task.id} className="task-item completed">
            <span>{task.name}</span>
            <span>{task.date}</span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              Mark Incomplete
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
