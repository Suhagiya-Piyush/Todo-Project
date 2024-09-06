const express = require('express');
const userRoutes = express.Router();
const { userLogin, userRegister, showUserLogin } = require('../controller/user.controller')

userRoutes.post('/login', userLogin);
userRoutes.get('/login', showUserLogin);

userRoutes.post('/register', userRegister);

module.exports = userRoutes;