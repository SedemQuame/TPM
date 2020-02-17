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

    app.route('/createMedProfile').get(patient.createMedProfile);

    app.route('/createPatientMedRecord').get(patient.createPatientMedRecord);

    app.route('/createPatientProfile').get(patient.createPatientProfile);

    app.route('/medLogin').get(patient.medLogin);

    app.route('/modifyMedRecord').get(patient.modifyMedRecord);

    app.route('/viewMedRecord/:dbID/:id').get(patient.getPatientRecord);
    
    app.route('/viewpatientList/:dbId').get(patient.getPatientList);
};
