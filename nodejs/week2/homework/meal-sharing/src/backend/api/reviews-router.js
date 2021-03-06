const { request, response } = require("express");
const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/", async (request, response) => {
    try {
    response.send(reviews);
    } catch (error) {
      throw error;
    }
  });

  router.get("/:id", async (request, response) => {
    let eachReview = undefined;
    // console.log(reviews);
    for (let x = 0; x < reviews.length; x++) {
      if (request.params.id == reviews[x].id) {
        eachReview = reviews[x];
      }
    }
    response.send(eachReview);
  });
 

module.exports = router;