// jshint esversion:6
// ================================ creating list application route ===================================//
module.exports = app => {
    const patient = require('../controllers/patient.controllers');

    // //==========================================  ============================================//

    app.route('/createPatient').post(patient.createNewPatient);    

    // app.route('/getPatientRecord').post(patient.getPatientData);

    // app.route('/deletePatientRecord').post(patient.removePatient);
};
