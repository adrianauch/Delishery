// Holding Gloabl Variables for randomization.
// The following 4 arrays will hold any drink and food info to be displayed
var parsedIngredientList = [];
var parsedIngredientQuantity = [];
var parsedDrinkList = [];
var parsedDrinkQuantity = [];
var catSelection = {};
var DrinkSelection = {};
var FoodCatBtn = document.querySelector("#parent-food");
var DrinkSelcBtn = document.querySelector("#parent-drinks");
var drinkSelection;
var foodSelection;

//API Fetch URLs
var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
var foodURL = "https://www.themealdb.com/api/json/v1/1/random.php";

drinkURL = JSON.parse(localStorage.getItem("savedDrinkURL"));
foodURL = JSON.parse(localStorage.getItem("savedFoodURL"));
if (drinkURL === null) {
  drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  foodURL = "https://www.themealdb.com/api/json/v1/1/random.php";
}

// This fn sets food ingredients into an array (cleaner that the object's setup), parses out nulls, and console logs the ingredients with quantity.
// Once html is finished, ingredients will be appended to doc instead of console logging.
function foodRecipe() {
  fetch(foodURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Figure out loop with string concated variable to miminize code
      var rawIngredientList = [
        data.meals[0].strIngredient1,
        data.meals[0].strIngredient2,
        data.meals[0].strIngredient3,
        data.meals[0].strIngredient4,
        data.meals[0].strIngredient5,
        data.meals[0].strIngredient6,
        data.meals[0].strIngredient7,
        data.meals[0].strIngredient8,
        data.meals[0].strIngredient9,
        data.meals[0].strIngredient10,
        data.meals[0].strIngredient11,
        data.meals[0].strIngredient12,
        data.meals[0].strIngredient13,
        data.meals[0].strIngredient14,
        data.meals[0].strIngredient15,
        data.meals[0].strIngredient16,
        data.meals[0].strIngredient17,
        data.meals[0].strIngredient18,
        data.meals[0].strIngredient19,
        data.meals[0].strIngredient20,
      ];
      parsedIngredientList = rawIngredientList.filter((e) => e);

      var rawIngredientQuantity = [
        data.meals[0].strMeasure1,
        data.meals[0].strMeasure2,
        data.meals[0].strMeasure3,
        data.meals[0].strMeasure4,
        data.meals[0].strMeasure5,
        data.meals[0].strMeasure6,
        data.meals[0].strMeasure7,
        data.meals[0].strMeasure8,
        data.meals[0].strMeasure9,
        data.meals[0].strMeasure10,
        data.meals[0].strMeasure11,
        data.meals[0].strMeasure12,
        data.meals[0].strMeasure13,
        data.meals[0].strMeasure14,
        data.meals[0].strMeasure15,
        data.meals[0].strMeasure16,
        data.meals[0].strMeasure17,
        data.meals[0].strMeasure18,
        data.meals[0].strMeasure19,
        data.meals[0].strMeasure20,
      ];
      parsedIngredientQuantity = rawIngredientQuantity.filter((e) => e);
      // If user clicks refresh button, will remove the previous recipe's ingredients
      $("#biteSection").find("li").remove();

      $("#biteSection").find("h5").text(data.meals[0].strMeal);
      for (var i = 0; i < parsedIngredientList.length; i++) {
        var ingredientList = $("#biteSection").find("ul");
        var ingredientItem = $("<li></li>").text(
          parsedIngredientQuantity[i] + " " + parsedIngredientList[i]
        );
        ingredientList.append(ingredientItem);
      }
      $("#biteSection").find("p").text(data.meals[0].strInstructions);
      console.log(data.meals[0].strCategory);
    });
}

// This fn sets drink ingredients into an array (cleaner that the object's setup), parses out nulls, and console logs the ingredients with quantity.
// Once html is finished, ingredients will be appended to doc instead of console logging.
function drinkRecipe() {
  fetch(drinkURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Figure out loop with string concated variable to miminize code
      var rawDrinkList = [
        data.drinks[0].strIngredient1,
        data.drinks[0].strIngredient2,
        data.drinks[0].strIngredient3,
        data.drinks[0].strIngredient4,
        data.drinks[0].strIngredient5,
        data.drinks[0].strIngredient6,
        data.drinks[0].strIngredient7,
        data.drinks[0].strIngredient8,
        data.drinks[0].strIngredient9,
        data.drinks[0].strIngredient10,
        data.drinks[0].strIngredient11,
        data.drinks[0].strIngredient12,
        data.drinks[0].strIngredient13,
        data.drinks[0].strIngredient14,
        data.drinks[0].strIngredient15,
        data.drinks[0].strIngredient16,
        data.drinks[0].strIngredient17,
        data.drinks[0].strIngredient18,
        data.drinks[0].strIngredient19,
        data.drinks[0].strIngredient20,
      ];
      parsedDrinkList = rawDrinkList.filter((e) => e);

      var rawDrinkQuantity = [
        data.drinks[0].strMeasure1,
        data.drinks[0].strMeasure2,
        data.drinks[0].strMeasure3,
        data.drinks[0].strMeasure4,
        data.drinks[0].strMeasure5,
        data.drinks[0].strMeasure6,
        data.drinks[0].strMeasure7,
        data.drinks[0].strMeasure8,
        data.drinks[0].strMeasure9,
        data.drinks[0].strMeasure10,
        data.drinks[0].strMeasure11,
        data.drinks[0].strMeasure12,
        data.drinks[0].strMeasure13,
        data.drinks[0].strMeasure14,
        data.drinks[0].strMeasure15,
        data.drinks[0].strMeasure16,
        data.drinks[0].strMeasure17,
        data.drinks[0].strMeasure18,
        data.drinks[0].strMeasure19,
        data.drinks[0].strMeasure20,
      ];
      parsedDrinkQuantity = rawDrinkQuantity.filter((e) => e);

      // If user clicks refresh button, will remove the previous recipe's ingredients
      $("#bevieSection").find("li").remove();

      $("#bevieSection").find("h5").text(data.drinks[0].strDrink);
      for (var i = 0; i < parsedDrinkList.length; i++) {
        var ingredientList = $("#bevieSection").find("ul");
        var ingredientItem = $("<li></li>").text(
          parsedDrinkQuantity[i] + " " + parsedDrinkList[i]
        );
        ingredientList.append(ingredientItem);
      }
      $("#bevieSection").find("p").text(data.drinks[0].strInstructions);
      console.log(data.drinks[0].strCategory);
    });
}

//user selection for categories
function catergories(userSelection) {
  var urlID = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  fetch(urlID + userSelection)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.meals);
      var RecipeID =
        data.meals[Math.floor(Math.random() * data.meals.length)].idMeal;
      console.log(RecipeID);
      recipeCat(RecipeID);
    });
}

function recipeCat(ID) {
  var foodURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + ID;
  localStorage.setItem("savedFoodURL", JSON.stringify(foodURL));
  location.href = "./display.html";
}

///cocktail selector
function TypeofAlc(userDrinkSelection) {
  var urlID = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
  fetch(urlID + userDrinkSelection)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.drinks);
      var RecipeID =
        data.drinks[Math.floor(Math.random() * data.drinks.length)].idDrink;
      console.log(RecipeID);
      RecipeAlc(RecipeID);
    })
    .catch(Error);
}

function RecipeAlc(ID) {
  var drinkURL =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + ID;
  localStorage.setItem("savedDrinkURL", JSON.stringify(drinkURL));
}

// Event Listner:
DrinkSelcBtn.addEventListener("click", function (event) {
  TypeofAlc(event.target.value);

  $("#parent-drinks").attr("id", "parent-food");
  $("header").text("What type of food would you like?");
  $("#Vodka").val("Chicken").text("Chicken");
  $("#Gin").val("Beef").text("Beef");
  $("#Whiskey").val("Pasta").text("Pasta");
  $("#Tequila").val("Pork").text("Pork");
  $("#Champagne").val("Vegetarian").text("Vegetarian");

  $("#parent-food").click(function () {
    catergories(event.target.value);
  });
});

$("#refreshFood").on("click", function () {
  foodRecipe();
});

$("#refreshDrink").on("click", function () {
  drinkRecipe();
});

$("#printBtn").click(function () {
  window.print();
});
