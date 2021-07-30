const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment_schema = new Schema({
  user: String,
  title: String,
  content: {body: String},
}, {timestamps: true})


const Comment = mongoose.model('Comment', Comment_schema);
module.exports = Comment;