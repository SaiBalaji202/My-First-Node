const express = require('express') ;
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

const port = process.env.PORT || 8888;

var app = express();
app.get('/', (req, res) => {
	res.render('style.hbs', {
		pageTitle: 'Home', 
		author: 'Balaji', 
		currentYear: new Date().getFullYear()
	});
});
app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Us', 
		author: 'Balaji', 
		currentYear: new Date().getFullYear()
	});
});

app.listen(port, () => {
	console.log(`Server Started on the Port ${port}`);	
});