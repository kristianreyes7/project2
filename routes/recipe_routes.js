const express = require('express');
const meal = express.Router();
//===data from schema===//
const Recipe_controller = require('../controllers/recipe_controller.js');

//====index====//
meal.get('/', Recipe_controller.index);
meal.get('/about', Recipe_controller.aboutME);
meal.get('/motto', Recipe_controller.motto)
meal.get('/breakfast', Recipe_controller.breakfast_index);
meal.get('/lunch', Recipe_controller.lunch_index);
meal.get('/dinner', Recipe_controller.dinner_index);
meal.get('/search/', Recipe_controller.search_index);
//====Render New Page====//
meal.get('/new', Recipe_controller.new_render);
//====Create New Object from New Page Form====//
meal.post('/', Recipe_controller.new_recipe);
//===Seed New Recipes====//
meal.get('/setup/seed', Recipe_controller.recipe_seed);
//====Render Edit Page====//
meal.get('/:id/edit', Recipe_controller.edit_render)
//====Update Recipe====//
meal.put('/:id', Recipe_controller.edit);
//====Destroy Recipe====//
meal.delete('/:id', Recipe_controller.recipe_delete);
//====Show====//
meal.get('/:id', Recipe_controller.show);
// //====Comments====//
// meal.get('/:id/comments', Recipe_controller.comment_index);
// meal.get('/:id/comments/new', Recipe_controller.comment_render);
// meal.post('/:id/comments', Recipe_controller.new_comment);

module.exports = meal;