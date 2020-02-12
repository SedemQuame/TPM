// jshint esversion:8
require('dotenv').config({ path: __dirname + './../.env' });

//====================================== requiring modules ===========================================//
// node modules

// custom models
const patientmodel = require('../models/patient.models');

//================================== creating HTTP handler methods ==================================//
// create new patient
exports.createNewPatient = (req, res) => {
     patientmodel.create({
        id: `cvx` ,
        name: `sdf`,
        address: `s`,
        birth_date: null,
        gender: `123`,
        contact_by: `dsdf`,
        phone: `asd`,
        race: `asdef`,
        languages: `lang`,
        employment_status: `gang`,
        email_address: `man`,
        marital_status: `nal`
   }).then((n)=>{
        res.send({info: `Created a new patient.`});
   }).catch((err) => {
        res.send({info: `Unable to create a new patient.`});
   });
};

// get patient result
exports.getPatientRecord = (req, res) => {
    patient.find().then().catch();
};

// delete patient result
exports.deletePatientRecord = (req, res) => {
    patient.findByIdAndRemove().then().catch();
};