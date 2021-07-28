const bcrypt = require('bcrypt')
const Users = require('../models/users_create.js');

//====render new page====//
const users_new = (req, res) => {
  res.render('users/new.ejs',{
    currentUser: req.session.currentUser,
  });  
}
//====post route====//
const user_pw = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  Users.create(req.body, (error, createdUser) => {
    error? console.log(error)
    : 
    console.log('user is created', createdUser)
    res.redirect('/recipes')
  })  
}

module.exports = {
  users_new,
  user_pw,
}