const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));



//GET route that will supply arithmetic

app.get("/", function(req, res) {
    res.send("Calculator (Add/Sub/Mult/Div)");
});

//get route that will supply arithmetic

app.get("/add/:num1/:num2", function(req, res) {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);

    let total = (num1 + num2).toString();
    res.send(total)
    console.log(total);
});

app.get("/sub/:num1/:num2", function(req, res) {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);

    let total = (num1 - num2).toString();
    res.send(total)
    console.log(total);
});

app.get("/mul/:num1/:num2", function(req, res) {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);

    let total = (num1 * num2).toString();
    res.send(total)
    console.log(total);
});

app.get("/div/:num1/:num2", function(req, res) {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);

    let total = (num1 / num2);
    // res.send(total)
    console.log(total);
});


app.listen(3000, function() {
    console.log("Server is running on Port 3000!");
});