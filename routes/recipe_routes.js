const express = require('express');
const meal = express.Router();
//===data from schema===//
const Recipe_controller = require('../controllers/recipe_controller.js');
//====index====//
meal.get('/', Recipe_controller.index);
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

module.exports = meal;