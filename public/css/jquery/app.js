$(() => {
  $('.new_ingredientBtn').on('click', (e) => {
    console.log(e);
    const $input = $('<input>').attr({
      "type": "text",
      "name": "ingredients",
      "placeholder": "Ingredients"
    });
    $('.new_ingredients').append($input);
  })


  $('.carousel-control-next').on('click', () => {
    
  })




})