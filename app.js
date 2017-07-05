const express = require("express");
const bodyParser = require("body-parser");
const validator = require("express-validator");
const mustacheExpress = require("mustache-express");
const path = require("path");
const session = require("express-session");
const routes = require('./routes/routes.js');

// Initialze Express App (method)
const app = express();

// Serve static files to server
app.use(express.static(path.join(__dirname, "public")));

// Setting up View Engine
app.engine("mustache", mustacheExpress());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");

// Body parser and validator implementation
app.use(bodyParser.json()); //parse json files
app.use(bodyParser.urlencoded({extended: true}));//parse body of form
app.use(validator());

// Initialize Express Session (middleware)
app.use(session({
  secret: 'asdfasdf',
  resave: false,
  saveUninitialized: false
}));

app.use('/', routes);

app.listen(3000, function(){
  console.log('Its up and running !')
  })
