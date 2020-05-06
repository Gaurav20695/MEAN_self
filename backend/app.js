var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

var post_route = require('./router/post_route');
var user_route = require('./router/userRoute');


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoDb = 'mongodb://localhost:27017/MEAN';
mongoose.connect(mongoDb)
    .then(() => {
        console.log("Connected to database");
    })
    .catch(() => {
        console.log("Connection failed");
    });

app.use('/api', post_route);

app.use('/user', user_route);



module.exports = app;