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

//require our html routing for our app using express
require('./app/routing/htmlRoutes')(app);

//confirms you are connected to local host
app.listen(PORT, function () {
    console.log("App listening on port: " + PORT);
})