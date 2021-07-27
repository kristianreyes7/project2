const Recipes = require('../models/recipe_create.js');

//====index recipes====//
const index = (req, res) => {
  Recipes.find({}, (error, allRecipes) => {
    error? console.log(error)
    :
    res.render('recipes/index.ejs', {
      recipe: allRecipes
    })    
  })  
}
//====create====//
const new_render = (req, res) => {
  res.render('recipes/new.ejs',{});  
} 
const new_recipe = (req, res) => {
  Recipes.create(req.body, (error, newRecipe) => {
    error? console.log(error)
    :
    res.redirect('/recipes');    
  })
}
//====read====//
const show = (req, res) => {
  Recipes.findById(req.params.id, (error, foundData) => {
    error? console.log(error)
    :
    res.render('recipes/show.ejs',{
      recipe: foundData
    })   
  })  
}
//====update====//
const edit_render = (req, res) => {
  Recipes.findById(req.params.id, (error, foundData) => {
    error? console.log(error)
    : 
    res.render('recipes/edit.ejs', {
      recipe: foundData
    })    
  })  
}

const edit = (req, res) => {
  Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, foundData) => {
    error? console.log(error)
    :
    res.redirect('/recipes');   
  })  
}

//====delete====//
const recipe_delete = (req, res) => {
  Recipes.findByIdAndDelete(req.params.id, (error, foundData) => {
    error? console.log(error)
    :
    res.redirect('/recipes');    
  });  
}

module.exports = {
  index,
  new_render,
  new_recipe,
  show,
  edit_render,
  edit,
  recipe_delete
}