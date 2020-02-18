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
exports.createNewProblemRecord = (req, res) => {

    console.log(req.body);

    
    if(req.body.dbID == 1){
        dbTable.insertIntoProblemDb(db.con1, req, res);
    }else if(req.body.dbID == 2){
        dbTable.insertIntoProblemDb(db.con2, req, res);
    }else if(req.body.dbID == 3){
        dbTable.insertIntoProblemDb(db.con3, req, res);
    }
};

// get patient result
exports.getPatientProblemRecordById = (req, res) => {
    if(req.query.dbID == 1){
        dbTable.getPatientProblemDataById(db.con1, req, res);
    }else if(req.query.dbID == 2){
        dbTable.getPatientProblemDataById(db.con2, req, res);
    }else if(req.query.dbID == 3){
        dbTable.getPatientProblemDataById(db.con3, req, res);
    }
};

exports.getAllPatientProblemRecord = (req, res) => {
    if(req.query.dbID == 1){
        dbTable.getAllPatientProblemRecords(db.con1, req, res);
    }else if(req.query.dbID == 2){
        dbTable.getAllPatientProblemRecords(db.con2, req, res);
    }else if(req.query.dbID == 3){
        dbTable.getAllPatientProblemRecords(db.con3, req, res);
    }
};

// update patient result
exports.updatePatientRecordById = (req, res) => {
    if(req.query.dbID == 1){
        dbTable.updatePatientProblemRecords(db.con1, req, res);
    }else if(req.query.dbID == 2){
        dbTable.updatePatientProblemRecords(db.con2, req, res);
    }else if(req.query.dbID == 3){
        dbTable.updatePatientProblemRecords(db.con3, req, res);
    }
};

// delete patient result
exports.removePatientRecordById = (req, res) => {
    if(req.query.dbID == 1){
        dbTable.deletePatientProblemRecords(db.con1, req, res);
    }else if(req.query.dbID == 2){
        dbTable.deletePatientProblemRecords(db.con2, req, res);
    }else if(req.query.dbID == 3){
        dbTable.deletePatientProblemRecords(db.con3, req, res);
    }
};