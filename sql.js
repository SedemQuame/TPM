// jshint esversion:6
// requiring from sql
const mysql = require('mysql');


// custom models
const db = require('./config/db.config');

// creating mysql connection.
const con = mysql.createConnection(db.mysqlOptions);

con.connect((err) => {
    if(err){
        throw err;
    }else{
        console.log(`Connected to database`);
        let createPatientTable = `CREATE TABLE IF NOT EXISTS patients (
            id VARCHAR(20) NOT NULL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            birth_date Date NOT NULL,
            gender VARCHAR(255) NOT NULL,
            contact_by VARCHAR(255) NOT NULL,
            phone VARCHAR(255) NOT NULL,
            race VARCHAR(255) NOT NULL,
            languages VARCHAR(255) NOT NULL,
            employment_status VARCHAR(255) NOT NULL,
            email_address VARCHAR(255) NOT NULL,
            marital_status VARCHAR(255) NOT NULL
        )`;
        con.query(createPatientTable, function (err, result) {
          if (err) throw err;
          console.log("Patients table created");
        });

        let createProblemTable = `CREATE TABLE IF NOT EXISTS problem (
            problem_id VARCHAR(20) NOT NULL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            diagnosed_illness VARCHAR(255) NOT NULL,
            prescribed_medications VARCHAR(255) NOT NULL,
            birth_date Date NOT NULL,
            report VARCHAR(255) NOT NULL
        )`;
        con.query(createProblemTable, function (err, result) {
            if (err) throw err;
            console.log("Problems table created");
          });



        //   closing connection
        con.end(() => {
            // The connection has been closed
            console.log(`The connection closed.`);
        });
    }
});
