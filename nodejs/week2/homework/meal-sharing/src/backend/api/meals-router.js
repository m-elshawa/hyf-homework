const { response, request } = require("express");
const express = require("express");
const router = express.Router();
const meals = require("../data/meals.json");

// copied from app.js(week1)
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


router.get("/", async (request, response) => {
  const query = request.query
  if(query.maxPrice && isNaN(parseInt(query.maxPrice)) ||  query.createdAfter && isNaN(Date.parse(query.createdAfter)) || query.limit && isNaN(parseInt(query.limit))){
    return response.status(400).send('Incorrect Input')
  }
  try {
    if (query.maxPrice) {
      response.send(meals.filter(meal => meal.price < Number(query.maxPrice)))
    }
    else if(query.title){
      response.send(meals.filter(meal => meal.title.toLowerCase().includes(query.title.toLowerCase())))
    }
    else if(query.createdAfter){
      response.send(meals.filter(meal => Date.parse(meal.createdAt) >= Date.parse(query.createdAfter)))
    }
    else if(query.limit){
      response.send(meals.slice(0, query.limit))
    } else {
    response.send(meals)};
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const id = request.params.id
  if (isNaN(parseInt(id))) {
    return response.status(400).send('ID does not exist')
  }
  else {
    response.send(meals.filter(meal => meal.id == id)[0])
  }
})

module.exports = router;
