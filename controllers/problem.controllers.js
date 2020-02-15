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
exports.createNewProblem = (req, res) => {

};

// get patient result
exports.getPatientProblemHistory = (req, res) => {

};

// update patient result
exports.updatePatientHistory = (req, res) => {

};

// delete patient result
exports.removePatientHistory = (req, res) => {

};