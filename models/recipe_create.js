const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recipe_schema = new Schema({
  date: {type: Date, default: Date.now},
  title: {type: String, required: true},
  prep_time: {type: Number, required: true},
  rating: {type: Number, required: false},
  cook_time: {type: Number, required: true},
  description: {type: String, required: false},
  serving_size: {type: Number, required: false},
  ingredients: [String],
  directions: {step: [String]},
  comments: {type: String},
})


const Recipe = mongoose.model('Recipe', Recipe_schema);
module.exports = Recipe;