const express = require('express');
const Recipe = require('../models/recipe_create.js');
const meal = express.Router();

//===data from schema===//
const Recipes = require('../models/recipe_create.js');
//=====update route====//
meal.put('/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, foundData) => {
    res.redirect('/recipes');
  })  
})
//====edit route===//
meal.get('/:id/edit', (req, res) => {
  Recipe.findById(req.params.id, (error, foundData) => {
    error? console.log(error)
    :
    res.render('recipes/edit.ejs', {
      recipe: foundData,
    })    
  })
})
//====Render New Page====//
meal.get('/new', (req, res) => {
  res.render('recipes/new.ejs');  
})
//====Create New Object from New Page Form=====//
meal.post('/', (req,res) => {
  Recipes.create(req.body, (err, newRecipe) => {
    res.redirect('/recipes');
  })  
})
//====index recipes====//
meal.get('/', (req, res) => {
  Recipes.find({}, (err, allRecipes) => {
    res.render('recipes/index.ejs', {
      recipe: allRecipes   
    })
  })  
})
//====Destroy====//
meal.delete('/:id', (req, res) => {
  Recipes.findByIdAndDelete(req.params.id, (error, foundData) => {
    res.redirect('/recipes');    
  })
})
//===show====//
meal.get('/:id', (req, res) => {
  Recipes.findById(req.params.id, (error, foundData) => {
    error? console.log(error)
    :
    res.render('recipes/show.ejs',{
      recipe: foundData,
    })
  })
})
module.exports = meal;