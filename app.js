// jshint esversion: 6
require('dotenv').config();

//========================================= requiring modules ========================================//
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// custom user modules
const db = require('./config/db.config');

// creating connection to mongoDB using mongoose
mongoose.Promise = global.Promise;
const connectDB = () => {
mongoose.connect(db.mongoDBUrl, db.mongoDBOptions).catch((err) => {
    res.send({info: `Problem with database connection.`});
});
console.log('DB Connected....');
};


// creating connection to postgressqlDB

connectDB();

//creating app
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//====================================== requiring list routes ========================================//
require('./routes/patient.routes')(app);
// require('./routes/election.route')(app);

// define a simple route
app.get('/', (req, res) => {
    res.json({info: `Node.js, Express, MongoDB and Postgres API.`});
});

// listening port
let port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log(`App started on port: ${port}`);
});