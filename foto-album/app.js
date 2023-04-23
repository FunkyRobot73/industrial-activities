const express = require("express");
const ejs = require("ejs")
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"))


app.get("/", function(req, res) {
  res.render("index");
});

app.get("/index", function(req, res) {
  res.render("index");
});

app.get("/feedback", function(req, res) {
  res.render("feedback");
});

app.get("/gallery", function(req, res) {
  res.render("gallery");
});

app.get("/gallery-01", function(req, res) {
  res.render("gallery-01");
});

app.get("/gallery-02", function(req, res) {
  res.render("gallery-02");
});





app.listen(process.env.PORT || 3003, function() {
  console.log("Server is running on Port 3003.")
})

// BOILER ALERT!!!  <-----  install 
// npm i express body-parser ejs  <------needed npm midware 
// npm init -y       <-----JSON
// nodemon app.js    <-----Starts Server
