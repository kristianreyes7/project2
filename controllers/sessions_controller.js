const bcrypt = require('bcrypt')
const Users = require('../models/users_create.js');

//====render new page====//
const render_new = (req, res) => {
  res.render('sessions/new.ejs',{
    currentUser: req.session.currentUser
  });  
}
//====check for user and pw====//
const check_user = (req, res) => {
   // Step 1 Look for the username
   Users.findOne({ username: req.body.username }, (error, foundUser) => {
    // Database error
    if (error) {
      console.log(error)
      res.send('oops the db had a problem')
    } else if (!foundUser) {
      // if found user is undefined/null not found etc
      res.send('<a  href="/recipes">Sorry, no user found </a>')
    } else {
      // user is found yay!
      // now let's check if passwords match
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // add the user to our session
        req.session.currentUser = foundUser
        // redirect back to our home page
        res.redirect('/recipes')
      } else {
        // passwords do not match
        res.send('<a href="/"> password does not match </a>')
      }
    }
  })
}
//====destroy session/logout====//
const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/recipes');
  })
}

module.exports = {
  render_new,
  check_user,
  logout,
}