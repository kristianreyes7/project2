const Recipes = require('../models/recipe_create.js');

//====index recipes====//
const index = (req, res) => {
  Recipes.find({}, (error, allRecipes) => {
    error? console.log(error)
    :
    res.render('recipes/index.ejs', {
      recipe: allRecipes,
      currentUser: req.session.currentUser
    })    
  })  
}
//====create====//
const new_render = (req, res) => {
  res.render('recipes/new.ejs',{
    currentUser: req.session.currentUser
  });  
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
      recipe: foundData,
      currentUser: req.session.currentUser
    })   
  })  
}
//====update====//
const edit_render = (req, res) => {
  Recipes.findById(req.params.id, (error, foundData) => {
    error? console.log(error)
    : 
    res.render('recipes/edit.ejs', {
      recipe: foundData,
      currentUser: req.session.currentUser
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
//====seed====//
const recipe_seed = (req, res) => {
  Recipes.create([
    {
      category: "Lunch",
      title: "Turkey Club Pasta Salad",
      description: "This Turkey Club Pasta Salad is my summer fix, served room temp or slightly chilled. It’s loaded with everything that’s in a turkey club sandwich, but in pasta salad form, finished with a bright lemony dressing instead of mayo. Healthy, fresh and fantastically summery!!",
      picture: "https://cdn.shortpixel.ai/spai/w_725+q_lossy+ret_img+to_webp/https://www.tastefullygrace.com/wp-content/uploads/2021/07/APC-4647-2.jpg",
      ingredients: ["1/2 lbs pasta of choice", "1/2 lbs thick sliced carved tureky", "1/2 lbs turkey bacon, diced", "1 cup cherry tomatoes, halved", "1/2 cup finely grated parmesan", "5 ounces romain, chopped into bite-sized pieces", "1/2 cup extra virgin olive oil", "1 lemon", "2 anchovies", "black pepper", "Fresh basil", ],
      directions: ["For turkey bacon: dice bacon into small bits. Add 2 tablespoons olive oil to a nonstick pan and sauté bacon over medium-high heat for 20-25 minutes until bacon is extra crispy. Add more olive oil if bacon starts to stick to bottom of pan. Remove bacon from pan and set aside.", "While bacon is cooking, add anchovies and 2 tablespoons olive oil to a separate pot over medium-high heat. Bring oil to a simmer, turn heat off, and use two forks to shred anchovies and “melt” them into the olive oil. Remove from heat, and let oil cool.", "Cook pasta to al dente. Drain and rinse pasta in colander under cool water to stop cooking process and remove excess starch.", "To assemble: Add rinsed pasta to a big salad bowl. Add in crispy turkey bacon, cooled anchovy oil, turkey strips, tomatoes, romaine, juice of a large lemon, ¼ cup olive oil, parmigiano, and black pepper. Toss. Add more olive oil if dry. Serve room temperature or slightly chilled. Garnish with basil.", "To store: Saves well in the fridge for 2 days, however romaine will wilt! I recommend leaving out romaine if you plan to save in the fridge for later! Remove from fridge 30 minutes before serving, adding in fresh romaine and olive oil."],
      prepTime: 30,
      cookTime: 25,
      servings: 6
    },
    {
      category: "Breakfast",
      title: "Waffles",
      description: "Delicious meal for the early morning",
      picture: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2020-11-How-to-Make-Crisp-and-Fluffy-Belgian-Waffles%2FHow-to-Make-Crisp-n-Fluffy-Belgian-Waffles074",
      ingredients: ["2 cups flour", "1 1/2 tspn yeast", "1 1/2 tspn kosher salt", "1 1/2 cups of milk", "2 large eggs", "2 tspns vanila extract"],
      directions: ["Mix the dry ingredients, combine flour, yeast and salt in a large bowl", "Heat the milk and melt the butter", "Add eggs, 2 tspns extract", "Mix the waffle batter", "Make the waffles in a deep pocket waffles iron", "Serve"],
      prepTime: 10,
      cookTime: 20,
      servings: 6
    },
  ], (error, newData) => {
    error? console.log(error)
    :
    res.redirect('/recipes');    
  })  
}
module.exports = {
  index,
  new_render,
  new_recipe,
  show,
  edit_render,
  edit,
  recipe_delete, 
  recipe_seed,
}