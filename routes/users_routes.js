const bcrypt = require('bcrypt')
const express = require('express');
const users = express.Router();
//===data from schema===//
const User_controller = require('../controllers/user_controller.js');
//====create====//
users.get('/new', User_controller.users_new);
users.post('/', User_controller.user_pw);

//====export====//
module.exports = users;