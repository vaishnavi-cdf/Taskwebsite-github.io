const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/task'); // Task routes ko import karein

const app = express();
const PORT = 5005;

// Middleware
app.use(express.json());  // To parse JSON data

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/taskmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully!'))
.catch((err) => console.log('MongoDB connection error:', err));

// Use Task Routes
app.use('/tasks', taskRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
