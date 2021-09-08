const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");
const { param } = require("./meals-router");

router.get("/:id", async (request, response) => {
    try {
      let r = undefined;
      console.log(reservations);
      for (let x = 0; x < reservations.length; x++) {
        
          //  console.log(reservations[x].name);
           if (request.params.id == reservations[x].id) {
            r = reservations[x];
           }
           

      }
      response.send(r);
    } catch (error) {
      throw error;
    }
  });


  router.get("/reservation", async (request, response) => {
    response.send("Reservations Web App");
  });

  router.get("/", async (request, response) => {
    response.send(reservations);
  });


module.exports = router;