// jshint esversion:8
require('dotenv').config({ path: __dirname + './../.env' });

//====================================== requiring modules ===========================================//
// node modules

// custom models
const patientSchema = require('./../models/patient.models');
const db = require('./../config/db.config');
const dbTable = require(`./../controllers/dbtable.controllers`);


//================================== creating HTTP handler methods ==================================//
// create new patient
exports.createNewPatient = (req, res) => {
    // res.send({id: `${req.query.dbID}`});
    if(req.query.dbID == 1){
        console.log(db.con1);
        dbTable.insertIntoDb(db.con1, req, res);
    }else if(req.query.dbID == 2){
        dbTable.insertIntoDb(db.con2, req, res);
    }else if(req.query.dbID == 3){
        dbTable.insertIntoDb(db.con3, req, res);
    }
};

// // get patient result
// exports.getPatientRecord = (req, res) => {

// };

// // update patient result
// exports.updatePatientData = (req, res) => {

// };

// // delete patient result
// exports.deletePatientRecord = (req, res) => {

// };