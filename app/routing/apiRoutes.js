//this page determines what data the user sees and what the user is able to post to store in server
//require all of the data needed
let friendsData = require('../data/friends');

//app represents express which was named in server.js file
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });

}