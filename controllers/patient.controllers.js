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
exports.createNewPatientRecord = (req, res) => {
    if(req.body.dbID == 1){
        console.log(db.con1);
        dbTable.insertIntoDb(db.con1, req, res);
    }else if(req.body.dbID == 2){
        dbTable.insertIntoDb(db.con2, req, res);
    }else if(req.body.dbID == 3){
        dbTable.insertIntoDb(db.con3, req, res);
    }
};

// get patient list
exports.getPatientList = (req, res) => {
    console.log(req.params.dbId);
    let result;    
    if(req.params.dbId == 1){
        result = dbTable.selectAllFromDb(db.con1, req, res);        
    }else if(req.params.dbId == 2){
        result = dbTable.selectAllFromDb(db.con2, req, res);        
    }else if(req.params.dbId == 3){
        result = dbTable.selectAllFromDb(db.con3, req, res);        
    }
};

// get patient result
exports.getPatientRecord = (req, res) => {
        if(req.params.dbID == 1){
            dbTable.selectFromDb(db.con1, req, res);
        }else if(req.params.dbID == 2){
            dbTable.selectFromDb(db.con2, req, res);
        }else if(req.params.dbID == 3){
            dbTable.selectFromDb(db.con3, req, res);
        }else{
            // getting patient data from all databases.
            res.send({err: `error occured`});
        }
};

// update patient result
exports.updatePatientDataById = (req, res) => {
    if(req.body.dbID == 1){
        dbTable.updateRowInDb(db.con1, req, res);
    }else if(req.body.dbID == 2){
        dbTable.updateRowInDb(db.con2, req, res);
    }else if(req.body.dbID == 3){
        dbTable.updateRowInDb(db.con3, req, res);
    }
};

// delete patient result
exports.removePatientById = (req, res) => {
    if(req.body.dbID == 1){
        dbTable.deleteRowInDbById(db.con1, req, res);
    }else if(req.body.dbID == 2){
        dbTable.deleteRowInDbById(db.con2, req, res);
    }else if(req.body.dbID == 3){
        dbTable.deleteRowInDbById(db.con3, req, res);
    }
};

// delete patient result
exports.removeAllPatientsRecords = (req, res) => {
    if(req.body.dbID == 1){
        dbTable.deleteAllFromDb(db.con1, req, res);
    }else if(req.body.dbID == 2){
        dbTable.deleteAllFromDb(db.con2, req, res);
    }else if(req.body.dbID == 3){
        dbTable.deleteAllFromDb(db.con3, req, res);
    }else{
        // getting patient data from all databases.
        dbTable.deleteAllFromDb(db.con1, req, res);
        dbTable.deleteAllFromDb(db.con2, req, res);
        dbTable.deleteAllFromDb(db.con3, req, res);
    }
};

exports.createMedProfile = (req, res) => {
    res.render(__dirname + `./../views/createMedProfile.view.ejs`);
};

exports.createPatientMedRecord = (req, res) => {
    res.render(__dirname + `./../views/createPatientMedRecord.view.ejs`);
};

exports.createPatientProfile = (req, res) => {
    res.render(__dirname + `./../views/createPatientProfile.view.ejs`);
};

exports.home = (req, res) => {
    res.render(__dirname + `./../views/homepage.view.ejs`);
};


exports.medLogin = (req, res) => {
    res.render(__dirname + `./../views/medLogin.view.ejs`);
};

exports.modifyMedRecord = (req, res) => {
    res.render(__dirname + `./../views/modfiyMedRecord.view.ejs`);
};

// exports.viewMedRecord = (req, res) => {
//     res.render(__dirname + `./../views/viewPatientMedRecord.view.ejs`);
// };