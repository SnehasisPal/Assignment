// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

// Endpoint for user list retrieval
router.get('/users', userController.getUsers);

module.exports = router;
