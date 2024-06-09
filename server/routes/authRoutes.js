const express = require('express');
const { registerUser, loginUser, oauthSignIn } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/oauth/google', oauthSignIn);

module.exports = router;