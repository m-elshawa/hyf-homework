const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));

//console.log("Addition"); Get request

app.get("/calculator/add", (req, res) => {
  const query = req.query;
  let total = 0;
  for (let i = 0; i < query.firstParam.length; i++) {
    if (parseInt(query.firstParam[i])) {
      total += Number(query.firstParam[i]);
    } else {
      res.status(400).json("Error, Try again!");
    }
  }
  for (let i = 0; i < query.secondParam.length; i++) {
    if (parseInt(query.secondParam[i])) {
      total += Number(query.secondParam[i]);
    } else {
      res.status(400).json("Error, Try again!");
    }
  }
  res.send("Total number : " + total);
});
// console.log("Multiplication");

app.get("/calculator/multiply", (req, res) => {
  const query = req.query;
  let total = 0;
  for (let i = 0; i < query.firstParam.length; i++) {
    if (parseInt(query.firstParam[i])) {
      total += Number(query.firstParam[i]);
    } else {
      res.status(400).json("Error, Try again!");
    }
  }
  for (let i = 0; i < query.secondParam.length; i++) {
    if (parseInt(query.secondParam[i])) {
      total *= Number(query.secondParam[i]);
    } else {
      res.status(400).json("Error, Try again!");
    }
  }
  res.send("Total number : " + total);
});

app.get("/calculator/multiply", (req, res) => {
  const query = req.query;
  if (query.firstParam && query.secondParam) {
    res.send(
      `Multiplication is = ${
        Number(query.firstParam) * Number(query.secondParam)
      }`
    );
  }
});

// console.log("Division");

app.get("/calculator/divide", (req, res) => {
  const query = req.query;
  if (query.firstParam && query.secondParam) {
    res.send(
      `Division is = ${Number(query.firstParam) / Number(query.secondParam)}`
    );
  }
});

// console.log("Subtraction");

app.get("/calculator/subtract", (req, res) => {
  const query = req.query;
  if (query.firstParam && query.secondParam) {
    res.send(
      `Subtraction is = ${
        parseInt(query.firstParam) - parseInt(query.secondParam)
      }`
    );
  }
});

//Post requests (I donno how to check if it's working)

app.post("/calculator/multiply", (req, res) => {
  const firstParam = Number(req.body.firstParam);
  const secondParam = Number(req.body.secondParam);

  const result = firstParam * secondParam;

  res.send("Multiplication equals: " + result);
});

app.post("/calculator/division", (req, res) => {
  const firstParam = Number(req.body.firstParam);
  const secondParam = Number(req.body.secondParam);

  const result = firstParam / secondParam;

  res.send("Division equals: " + result);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
