// We need to include the path package to get the correct file path for our html
var path = require('path');


module.exports = function (app) {
	
	//A GET Route to /survey which should display the survey page.
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	//A default USE route that leads to home.html which displays the home page
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};