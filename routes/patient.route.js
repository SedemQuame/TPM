// jshint esversion:6
// ================================ creating list application route ===================================//
const patient = require('./../controllers/patient.controllers');

module.exports = app => {

    // //========================================== Creating HTTP Methods ============================================//

    app.route('/createPatientRecord').post(patient.createNewPatient);    

    // app.route('/getPatientRecord').post(patient.getPatientData);

    // app.route('/updatePatientRecord').post(patient.updatePatientData);

    // app.route('/deletePatientRecord').post(patient.removePatient);
};
