// jshint esversion:6
// ================================ creating list application route ===================================//
module.exports = app => {
    const patient = require('../controllers/patient.controllers');

    // //========================================== Creating HTTP Methods ============================================//

    app.route('/createPatientRecord').post(patient.createNewPatient);    

    app.route('/getPatientRecord').post(patient.getPatientData);

    app.route('/updatePatientRecord').post(patient.updatePatientData);

    app.route('/deletePatientRecord').post(patient.removePatient);
};
