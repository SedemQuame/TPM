// jshint esversion:6
// ================================ creating list application route ===================================//
const patient = require('./../controllers/patient.controllers');

module.exports = app => {

    // //========================================== Creating HTTP Methods ============================================//

    app.route('/createPatientRecord').post(patient.createNewPatientRecord);    

    app.route('/getPatientRecord').post(patient.getPatientRecord);

    app.route('/updatePatientRecord').post(patient.updatePatientDataById);

    app.route('/deletePatientRecord').post(patient.removePatientById);

    app.route('/deleteAllPatientsRecord').post(patient.removeAllPatientsRecords);
};
