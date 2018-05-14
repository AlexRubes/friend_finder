//this page determines what data the user sees and what the user is able to post to store in server
//require all of the data needed
let friendsData = require('../data/friends');

//app represents express which was named in server.js file
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res) {
        //create variables for info user entered into survey
        let userData = req.body;
        let userScores = userData.scores;
        //create variables to find furry friend match
        let scoresArr = [];
        let match = 0;
           

        for (let i = 0; i < friendsData.length; i++) {
            let compDiff = 0;
            for (let j = 0; j < userScores.length; j++) {
                compDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userScores[j])))
            }
            scoresArr.push(compDiff);
        }
        //loop through scoreArr to determine best match 
        for (let k = 0; k < scoresArr.length; k++) {
            if(scoresArr[k] <= scoresArr[match]) {
                match = k;
            }
        }
        let bestFriend = friendsData[match];    
        res.json(bestFriend);

        friendsData.push(userData);
        
    });
};