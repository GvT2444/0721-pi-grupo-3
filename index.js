const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

const Router = require('./router/Router');

const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Router); 
app.listen(3000);