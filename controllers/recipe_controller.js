const Recipes = require('../models/recipe_create.js');
const Comments = require('../models/comment_create.js');


//====index recipes====//
const index = (req, res) => {
  Recipes.find({}, (error, allRecipes) => {
    error? console.log(error)
    :
    res.render('recipes/index/index.ejs', {
      recipe: allRecipes,
      currentUser: req.session.currentUser
    })    
  })  
}
const breakfast_index = (req, res) => {
  Recipes.find({category: "Breakfast"}, (error, allRecipes) => {
    error? console.log(error)
    :
    res.render('recipes/index/b_index.ejs', {
      recipe: allRecipes,
      currentUser: req.session.currentUser
    })    
  })  
}
const lunch_index = (req, res) => {
  Recipes.find({category: "Lunch"}, (error, allRecipes) => {
    error? console.log(error)
    :
    res.render('recipes/index/l_index.ejs', {
      recipe: allRecipes,
      currentUser: req.session.currentUser
    })    
  })  
}
const dinner_index = (req, res) => {
  Recipes.find({category: "Dinner"}, (error, allRecipes) => {
    error? console.log(error)
    :
    res.render('recipes/index/d_index.ejs', {
      recipe: allRecipes,
      currentUser: req.session.currentUser
    })    
  })  
}

const search_index = (req, res) => {
  Recipes.find({title: {$regex: new RegExp(req.query.title, "i")}}, (error, foundItem) => {
    error? console.log(error)
    :
    console.log(req.query.title);
    res.render('recipes/index/s_index.ejs', {
      recipe: foundItem,
      currentUser: req.session.currentUser    
    }) 
  })  
}
const aboutME = (req, res) => {
  Recipes.find({}, (error, allRecipes) => {
    error? console.log(error)
    :
    res.render('recipes/footerlinks/about.ejs', {
      recipe: allRecipes,
      currentUser: req.session.currentUser
    })    
  })  
}
const motto = (req, res) => {
  Recipes.find({}, (error, allRecipes) => {
    error? console.log(error)
    :
    res.render('recipes/footerlinks/company.ejs', {
      recipe: allRecipes,
      currentUser: req.session.currentUser
    })    
  })  
}
//====comments====//
// const comment_index = (req, res) => {
//   Recipes.findById(req.params.id, (error, foundData) => {
//       error? console.log(error)
//       :
//       res.render('comments/index.ejs', {
//         recipe: foundData, 
//         currentUser: req.session.currentUser,
//       })   
//     })  
// }
// const new_comment = (req, res) => {
//   Recipes.findById(req.params.id, (error, foundData) => {
//     Comments.create(req.body, (error, newRecipe) => {
//       error? console.log(error)
//       :
//       res.redirect(`/recipes/${req.params.id}/comments`);    
//     })
//   })
// }
// const comment_render = (req, res) => {
//   Recipes.findById(req.params.id, (error, foundData) => {    
//     res.render('comments/new.ejs',{
//       recipe: foundData,
//       currentUser: req.session.currentUser
//     });  
//   })
// } 
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
      category: "Dinner",
      title: "Chicken Parmesan",
      description: "My version of chicken parmesan is a little different than what they do in the restaurants, with less sauce and a crispier crust.",
      picture: "https://www.thecookierookie.com/wp-content/uploads/2019/04/crispy-chicken-parmesan-recipe-6-of-14.jpg",
      ingredients: ["4 skinless, boneless chicken breast halves", "salt and freshly ground black pepper to taste", "2 eggs", "1 cup panko bread crumbs, or more as needed", "½ cup grated Parmesan cheese", "2 tablespoons all-purpose flour, or more if needed", "1 cup olive oil for frying", "½ cup prepared tomato sauce", "¼ cup fresh mozzarella, cut into small cubes", "¼ cup chopped fresh basil", "½ cup grated provolone cheese", "¼ cup grated Parmesan cheese", "1 tablespoon olive oil"],
      directions: ["Preheat an oven to 450 degrees F (230 degrees C).", "Beat eggs in a shallow bowl and set aside.", "Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside.", "Place flour in a sifter or strainer; sprinkle over chicken breasts, evenly coating both sides", "Dip flour coated chicken breast in beaten eggs. Transfer breast to breadcrumb mixture, pressing the crumbs into both sides. Repeat for each breast. Set aside breaded chicken breasts for about 15 minutes.", "Heat 1 cup olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken until golden, about 2 minutes on each side. The chicken will finish cooking in the oven.", "Place chicken in a baking dish and top each breast with about 1/3 cup of tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle 1 to 2 tablespoons of Parmesan cheese on top and drizzle with 1 tablespoon olive oil.", "Bake in the preheated oven until cheese is browned and bubbly, and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C)."],
      prepTime: 25,
      cookTime: 20,
      servings: 4
    },
    {
      category: "Breakfast",
      title: "English Muffin Breakfast Pizzas",
      description: "Toasted English muffins make a perfect crust for mini breakfast pizzas.",
      picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4134410.jpg",
      ingredients: ["6 English muffins, split in half", "Non-stick cooking spray", "1/2 lbs sausages", "1/2 cup yellow onion", "1/2 cup chopped green bell peper", "1/2 cup chopped fresh button mushrooms", "8 eggs beaten", "1/2 tsp salt", "1/4 tsp ground black pepper", "1 1/2 cups shredded mozzarella cheese"],
      directions: ["Preheat broiler. Place English muffin halves on baking sheet; set aside. Spray large skillet with cooking spray. Heat over medium-high heat. Add sausage, onion, bell pepper and mushrooms; cook 5 minutes or until sausage is crumbled and vegetables are tender, stirring occasionally. Drain. Remove from skillet and keep warm.", "Reduce heat to medium. Add eggs to same skillet; sprinkle with salt and black pepper. Cook without stirring until edges and bottom begin to set. Gently turn to scramble; continue cooking until set", "Broil English muffin halves 2 minutes or until toasted. Top halves evenly with sausage mixture, scrambled eggs and cheese. Broil 3 minutes more or until cheese melts. Serve immediately."],
      prepTime: 30,
      cookTime: 30,
      servings: 12
    },
    {
      category: "Lunch",
      title: "Hot Dog Roll up",
      description: "Cheesy and easy. This two-minute lunch idea is so simple, your kids can make them.",
      picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F986595.jpg",
      ingredients: ["4 (6inch) flour tortillas", "4 hotdogs", "4 slices of american cheese"],
      directions: ["Place hot dogs between two paper towels and microwave on high for 20 seconds. Remove from towels and reserve the hot dogs hot.", "Lay one slice of American cheese on the center of each tortilla.", "Place hot hot dogs on top of each slice of cheese. Roll up each tortilla/cheese/hot dog by simply rolling from one end to the other.", "Place all four hot dog roll ups in the microwave and cook for an additional 10 to 12 seconds to fully melt the cheese and warm the tortillas.", "Remove from microwave and serve each hot dog roll up whole."], 
      prepTime: 2,
      cookTime: 2,
      servings: 4
    },
  ], (error, newData) => {
    error? console.log(error)
    :
    res.redirect('/recipes');    
  })  
}
// const recipe_seed = (req, res) => {
//   Recipes.create([
//     {
//       category: "Dinner",
//       title: "World's Best Lasagna",
//       description: "It takes a little work, but it is worth it",
//       picture: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFzYWduYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
//       ingredients: ["1lbs sweet Italian sausage", "3/4 lbs lean ground beef", "1/2 cup minced onion", "2 cloves garlic, crushed", "28 oz can crushed tomatoes", "2 (6 ounce) cans tomato paste", " 2(6.5oz) cans canned tomato sauce", "1/2 cup water", "2 tbsps white sugar", "1 1/2 tsps dried basil leaves", "1/2 tsp fennel seed", "1 teaspoon Italian seasoning", "1 1/2 tsps salt", "1/4 tsps black pepper", "4 tbsps chopped fresh parsley", "12 lasagna noodles", "16 ounces ricotta cheese", "1 egg", "3/4 lbs mozzarella cheese", "3/4 cup parmesan"],
//       directions: ["In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 teaspoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.", "Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.", "Preheat oven to 375 degrees F (190 degrees C).", "To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13-inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.","Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving." 
//     ],
//       prepTime: 30,
//       cookTime: 150,
//       servings: 12
//     },
//     {
//       category: "Dinner",
//       title: "Butter Beef",
//       description: "Easy, melt-in-your mouth onion-buttery beef from your slow cooker! Serve over cooked egg noodles.",
//       picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F05%2F07%2F73910_ButterBeef_MFS155-2000.jpg",
//       ingredients: ["3 lbs cubed beef stew meat", "1/2 cup butter", "1(1oz) dry onion soup mix"],
//       directions: ["Place the beef and butter into a slow cooker.", "Sprinkle the onion soup mix over.", "Cover, and cook on Low for 8 hours, or High for 4 to 5 hours. Stir once or twice"],
//       prepTime: 5,
//       cookTime: 300,
//       servings: 8
//     },
//     {
//       category: "Lunch",
//       title: "Cobb Salad",
//       description: "This Cobb salad has some of my favorite ingredients: chicken, egg, tomatoes, blue cheese and avocado.",
//       picture: "https://images.unsplash.com/photo-1605291535557-4fc6bb3b4d00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       ingredients: ["6 slices bacon", "3 eggs", "1 head iceberg lettuce, shredded", "3 cups cooked chicken meat, chopped", "2 tomatoes, seeded and chopped", "3/4 cup blue cheese, crumbled", "1 avocado", "3 green onions, chopped", "1 (8oz) Ranch style salad dressing"],
//       directions: ["Place eggs in a saucepan and cover completely with cold water. Bring water to a boil. Cover, remove from heat, and let eggs stand in hot water for 10 to 12 minutes. Remove from hot water, cool, peel and chop.", "Place bacon in a large, deep skillet. Cook over medium high heat until evenly brown. Drain, crumble and set aside.", "Divide shredded lettuce among individual plates.", "Evenly divide and arrange chicken, eggs, tomatoes, blue cheese, bacon, avocado and green onions in a row on top of the lettuce", "Drizzle with your favorite dressing and enjoy."], 
//       prepTime: 20,
//       cookTime: 30,
//       servings: 6
//     },
//     {
//       category: "Breakfast",
//       title: "Superfood Breakfast",
//       description: "This is a great tasting, quick breakfast concoction jam-packed with superfoods.",
//       picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2912530.jpg",
//       ingredients: ["1 cup nonfat plain yogurt", "1/4 cup blueberries", "2 tbsps dried goji berries", "1 tbsp ground flax seed", "1 tbsp ground walnuts", "1 tbsp ground almonds", "1 tsp unsweetened cocoa powder", "1/2 tsp ground cinnamon", "1/2 tsp honey"],
//       directions: ["Mix yogurt, blueberries, goji berries, flax seed, walnuts, almonds, cocoa powder, cinnamon, and honey together in a bowl."], 
//       prepTime: 5,
//       cookTime: 5,
//       servings: 1
//     }
//   ], (error, newData) => {
//     error? console.log(error)
//     :
//     res.redirect('/recipes');    
//   })  
// }
module.exports = {
  index,
  aboutME,
  motto,
  breakfast_index,
  lunch_index,
  dinner_index,
  search_index,
  new_render,
  new_recipe,
  show,
  edit_render,
  edit,
  recipe_delete, 
  recipe_seed,
  // comment_index,
  // new_comment,
  // comment_render,
}