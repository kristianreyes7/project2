const bcrypt = require('bcrypt')
const express = require('express');
const sessions = express.Router();
//===data from schema===//
const Sessions_controller = require('../controllers/sessions_controller.js');

//====render new page====//
sessions.get('/new', Sessions_controller.render_new);

// on sessions form submit (log in)
sessions.post('/', Sessions_controller.check_user);
//====logout====//
sessions.delete('/', Sessions_controller.logout);
module.exports = sessions