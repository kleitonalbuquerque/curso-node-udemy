var express = require("express");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");
var consign = require("consign");

var app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

// parse application/json
app.use(bodyParser.json());

consign()
  .include("app/routes")
  .then("config/dbConnection.js")
  .then("app/models")
  .then("app/controllers")
  .into(app);

module.exports = app;
