##Project 2:

This is a simple project that utilizes MongoDB/Express/NodeJS to create a fully functional CRUD application.  

Utilized Bcrypt/Express-sessions to create a unique session for the user and also encrypted user's password via bcrypt by salting.  
Upon loading the app the user must sign-in and if they do not have an account they must create one.
Utilized User Model to display username in top right corner upon log-in. They are able to logout via a logout button also located in the top right corner.  

The index allows users to search by category/keyword or simply choose a recipe that is displayed.  The user may also create a new recipe and input the appropriate fields via input into a form.  

Upon clicking the recipe the user is routed to the recipe's show page where they will be able to edit/delete.  

The edit page displays the ingredients and directions in a list format and the user can edit each field individually.  These values are stored in an array.  

TODO: Comment section, reviews and ratings for each recipe.  


