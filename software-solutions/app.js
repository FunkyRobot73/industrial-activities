const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/regrets", function(req, res) {
  res.render("regrets");
  

  
});

app.get("/customers", function(req, res) {
  res.render("customers");
});
app.get("/fields", function(req, res) {
  res.render("fields");
});

app.get("/careers", function(req, res) {
  res.render("careers");
});

app.listen(process.env.PORT || 3001, function() {
  console.log("Server is running on Port 3000.")
})
