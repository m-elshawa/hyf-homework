const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");


// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

// still can't manage to get the meals with their reviews
app.get("/meals", async (request, response) => {
  response.json(meals);
});

app.get("/cheap-meals", (request, response) => {
  cheapMeals = meals.filter((cheapmeal) => {
    return cheapmeal.price < 50;
  });
  response.json(cheapMeals);
});

app.get("/large-meals", async (request, response) => {
  largeMeals = meals.filter((largeMeal) => {
    return largeMeal.maxNumberOfGuests > 3;
  });
  response.json(largeMeals);
});

app.get("/meal", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/reservations", async (request, response) => {
  response.json(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send("Meal Sharing Web App");
});

module.exports = app;
