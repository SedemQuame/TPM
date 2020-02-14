//jshint esversion:6
// ===================================== requiring node modules ===================================== //
const mongoose = require('mongoose');

// ==================================== creating database schema=======================================//
const patientSchema = mongoose.Schema({
    // personal information
    // id: String,
    name: String,
    // address: String,
    // birth_date: Date,
    // gender: String,
    // contact_by: String,
    // phone: String,
    // race: String,
    // languages: String,
    // employment_status: String,
    // email_address: String,
    // marital_status: String,
});

module.exports = {
    patients: patientSchema
};
