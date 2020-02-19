// jshint esversion: 6
require('dotenv').config();

//========================================= requiring modules ========================================//
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
const mysql = require('mysql');
const {Client} = require(`pg`);
const sqlite3 = require('sqlite3').verbose();




// custom models
const db = require('./config/db.config');
const dbTable = require(`./controllers/dbtable.controllers`);

const dbLite = new sqlite3.Database('./DVLA.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// creating MySQL, connection and creating db table if not exists.
// usa db
dbTable.createDbSetup(db.con1);
// gh db
dbTable.createDbSetup(db.con2);
// china db
dbTable.createDbSetup(db.con3);

// creating connection to mongoDB using mongoose
mongoose.Promise = global.Promise;
const connectDB = async () => {
mongoose.connect(db.mongoDBUrl, db.mongoDBOptions)
    .then(() => {
        console.log('Connected To DB');
    })
    .catch((err) => {
        console.log('Not Connected To DB');
});
};
connectDB();

// creating connection to postgressqlDB
const client = new Client({
    connectionString: db.pgConUrl
});

// client.connect();

//creating app
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// serving static files in express
app.use(express.static(__dirname + '/public'));
app.use(fileupload());
// app.use(express.static('views'));



//====================================== requiring list routes ========================================//
require('./routes/patient.route')(app);
require('./routes/problem.route')(app);
require('./routes/users.routes')(app);


// define a simple route
app.get('/', (req, res) => {
    // res.json({info: `Node.js, Express, MongoDB and Postgres API.`});
    res.redirect(`/home`);
});

// listening port
let port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log(`App started on port: ${port}`);
});