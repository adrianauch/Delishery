// Holding Gloabl Variables for randomization.

//API Fetch URLs
var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
var foodURL = "https://www.themealdb.com/api/json/v1/1/random.php";

function foodRecipe() {
  fetch(foodURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      //Figure out loop with string concated variable to miminize code
      for (var i = 1; i < 21; i++) {
        // Figure out loop with string variable
        var currentIngredient = "strIngredient" + i;
        var ingredientPath = data.meals[0].currentIngredient;
      }

      console.log(data.meals[0].strIngredient1);
      console.log(data.meals[0].strIngredient2);
      console.log(data.meals[0].strIngredient3);
      console.log(data.meals[0].strIngredient4);
      console.log(data.meals[0].strIngredient5);
      console.log(data.meals[0].strIngredient6);
      console.log(data.meals[0].strIngredient7);
      console.log(data.meals[0].strIngredient8);
      console.log(data.meals[0].strIngredient9);
      console.log(data.meals[0].strIngredient10);
      console.log(data.meals[0].strIngredient11);
      console.log(data.meals[0].strIngredient12);
      console.log(data.meals[0].strIngredient13);
    });
}

foodRecipe();
