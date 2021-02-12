/**
 * Created by Carlos Leonardo Camilo Vargas HUuamán on 12/9/16.
 */
var express = require("express");
var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var employee = require('./routes/employee');
// var placelocation = require('./routes/placelocation');
var movieAPI = require('./routes/movie');

var app = express();

app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
app.use(movieAPI())
// app.use('/employee', employee);
// app.use('/', index);
// app.use('/placelocation', placelocation);

app.listen(8123);