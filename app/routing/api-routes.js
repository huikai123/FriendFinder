// We are linking our routes to a series of "data" sources.
var friendData = require('../data/friends.js');

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
module.exports = function (app) {
	app.get('/api/friends', function (req, res) {
		res.json(friendData);
	});

	//A POST routes /api/friends. This will be used to handle incoming survey results. 
	app.post('/api/friends', function (req, res) {
			
				friendData.push(req.body);
				res.json(true); // KEY LINE
			
		});
}

