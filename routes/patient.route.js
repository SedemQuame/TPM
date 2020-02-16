// jshint esversion:6
// ================================ creating list application route ===================================//
const patient = require('./../controllers/patient.controllers');

module.exports = app => {

    //========================================== Creating HTTP Methods ============================================//
    //========================================== POST ============================================//

    app.route('/createPatientRecord').post(patient.createNewPatientRecord);    

    app.route('/getPatientRecord').post(patient.getPatientRecord);

    app.route('/updatePatientRecord').post(patient.updatePatientDataById);

    app.route('/deletePatientRecord').post(patient.removePatientById);

    app.route('/deleteAllPatientsRecord').post(patient.removeAllPatientsRecords);

    //========================================== GET ============================================//
    app.route('/home').get(patient.home);

    app.route('/med').get(patient.createMedProfile);

};
