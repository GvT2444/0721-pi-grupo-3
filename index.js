const express = require('express');

const session = require('express-session');

const app = express();

app.use(express.urlencoded({ extended: false }));

const Router = require('./router/Router');

const path = require('path');

app.use(session({
    secret:"nem te conto",
    resave:true,
    saveUninitialized:true,
}));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Router); 
app.listen(3000);