const express = require('express');
const router = express.Router();
const userHandlers = require('../handlers/users');

router.get('/users/', userHandlers.returnAllUsers);

router.post('/users/registration', userHandlers.registration);

router.post('/users/login', userHandlers.login);

module.exports = router;
