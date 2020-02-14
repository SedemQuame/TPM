// jshint esversion:8
require('dotenv').config({ path: __dirname + './../.env' });

//====================================== requiring modules ===========================================//
// node modules

// custom models
const patientSchema = require('../models/patient.models');
const db = require('./config/db.config');
const dbTable = require(`./controllers/dbtable.controllers`);


//================================== creating HTTP handler methods ==================================//
// create new patient
exports.createNewPatient = (req, res) => {
    if(req.body.dbID == 1){
        dbTable.insertIntoDb(db.con1, req);
    }else if(req.body.dbID == 2){
        dbTable.insertIntoDb(db.con2, req);
    }else if(req.body.dbID == 3){
        dbTable.insertIntoDb(db.con3, req);
    }
};

// get patient result
exports.getPatientRecord = (req, res) => {

};

// update patient result
exports.updatePatientData = (req, res) => {

};

// delete patient result
exports.deletePatientRecord = (req, res) => {

};