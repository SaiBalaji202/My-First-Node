const express = require('express') ;
const hbs = require('hbs');

const process1 = require('process');

const port = process.env.PORT || 8888;

var app = express();
app.get('/', (req, res) => {
	res.render('footer.hbs', {
		pageTitle: 'Sample', 
		author: 'Balaji', 
		currentYear: new Date().getFullYear()
	});
});

app.listen(port, () => {
	console.log(`Server Started on the Port ${port}`);
	console.log(process1.env);	
});