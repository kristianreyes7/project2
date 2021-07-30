const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment_schema = require('./comment_create.js')
const Recipe_schema = new Schema({
  category: String,
  title: String,
  description: String,
  picture: String,
  ingredients: [String],
  directions: [String],
  prepTime: Number,
  cookTime: Number,
  servings: Number,
  // comments: [{Comment_schema}],
}, {timestamps: true})


const Recipe = mongoose.model('Recipe', Recipe_schema);
module.exports = Recipe;