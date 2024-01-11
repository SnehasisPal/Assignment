// src/app.js
const express = require('express');
const userRoutes = require('./routes/user.routes');
const pool = require('./config/dbConfig');

const app = express();
const port = 3000;

app.use(express.json());

// Using the userRoutes for handling user-related routes
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Gracefully close the MySQL connection pool on application exit
process.on('exit', () => {
  pool.end();
});

// Handle application termination
process.on('SIGINT', () => {
  pool.end(() => {
    process.exit(0);
  });
});
