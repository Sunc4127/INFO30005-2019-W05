var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// for testing purpose 
app.get('/',function(req,res){
	res.send("main route");
});

// Database setup
require('./models/db.js');

// Routes setup
var routes = require('./routes/routes.js');
app.use('/',routes);



//Start the server
//can put whatever 
app.listen(3000,function(req,res){
	console.log('Express listening on port 3000');
});