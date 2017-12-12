// Initialize Express in project
const express = require('express');
const app = express();
const request = require("request");
const cors = require('cors');
var fs = require('fs');
var pdf = require('html-pdf');
var ejs = require('ejs');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());


let NewUser = {};




app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  
    res.render('pages/TorontoRealestateBoard',NewUser);    
})




app.use(express.static('public'));

// Start Express on port 8080
app.listen(8080, () => {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});



app.post('/newitem', (req, res) => {
    NewUser = req.body ;
    res.send("done")    
    })





