const { request, response } = require("express");
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

//GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
app.get("/numbers/add", (req, res) => {
    const query = req.query
    if(query.first && query.second){
        res.send(`The Sum is = ${Number(query.first) + Number(query.second)}`) //I do not understand this line
    }
})

//GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).

app.get("/numbers/multiply/:firstnumber/:secondnumber", (req, res) => {
    const params = req.params
    res.send(`Result = ${Number(params.firstnumber) * Number(params.secondnumber)}`) //I don't understand this line
})

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
