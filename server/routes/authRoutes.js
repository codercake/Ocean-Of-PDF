const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController.js');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getUserProfile);

module.exports = router;
