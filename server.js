//====Dependencies====//
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const session = require('express-session')
require ('dotenv').config();

//=====PORT====//
const PORT = process.env.PORT || 3003;

//====Database====//
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,  useUnifiedTopology: true,
  useFindAndModify: false,
});
//error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//====Middleware====//
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(
  session({
    secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
  })
)

app.use('/', (req, res) => {
  res.redirect('/recipes');
})
// const isAuthenticated = (req, res, next) => {
//   if (req.session.currentUser) {
//     return next()
//   } else {
//     res.redirect('/sessions/new')
//   }
// }
// isAuthenticated



//====Routes====//
const recipe_router = require('./routes/recipe_routes.js')
app.use('/recipes',   recipe_router);

const user_router = require('./routes/users_routes.js')
app.use('/users', user_router)

const sessions_router = require('./routes/sessions_routes.js')
app.use('/sessions', sessions_router);

//====listener====//
app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
})