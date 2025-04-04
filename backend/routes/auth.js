const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth'); // Ensure this path is correct

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
