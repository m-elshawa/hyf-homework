const { response, request } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

// 12 tests passed, 6 failed. Can't get my code to work 

router.get("/", async (request, response) => {
  try {
    console.log(request.query.maxPrice);
    response.send(meals);
  } catch (error) {
    throw error;
  }
});


// copied from app.js(week1)
router.get("/meet", async (request, response) => {
  response.send("Meal Sharing Web APP");
});


router.get("/cheap-meals", (request, response) => {
  cheapMeals = meals.filter((cheapmeal) => {
    return cheapmeal.price < 50;
  });
  response.json(cheapMeals);
});

router.get("/large-meals", async (request, response) => {
  largeMeals = meals.filter((largeMeal) => {
    return largeMeal.maxNumberOfGuests > 3;
  });
  response.json(largeMeals);
});

router.get("/meal", async (request, response) => {
  response.send("Meal Sharing Web App");
});


router.get("/:id", async (request, response) => {
  let eachMeal = undefined;
  // console.log(meals);
  for (let x = 0; x < meals.length; x++) {
    if (request.params.id == meals[x].id) {
      eachMeal = meals[x];
    }
  }
  response.send(eachMeal);
});


module.exports = router;
