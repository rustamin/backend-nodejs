
var express = require("express");
var bodyParser = require('body-parser');

var movieAPI = require('./routes/movie');

var app = express();

app.set("view engine", "jade");

app.use(movieAPI())

app.listen(8123);