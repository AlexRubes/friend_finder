//require needed packages
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
let PORT = process.env.PORT || 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

//require our api and html routing for our app using express, put api first because we want to display data first
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//confirms you are connected to local host
app.listen(PORT, function () {
    console.log("App listening on port: " + PORT);
})