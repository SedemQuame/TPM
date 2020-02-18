// jshint esversion:6
const problem = require('../controllers/problem.controllers');

// ================================ creating list application route ===================================//
module.exports = app => {

    // //========================================== Creating HTTP Methods ============================================//

    app.route('/createProblemRecord').post(problem.createNewProblemRecord);    

    // app.route('/getProblemRecordById').post(problem.getPatientProblemRecordById);

    // app.route('/getAllPatientProblemRecord').post(problem.getAllPatientProblemRecord);

    // app.route('/updatePatientProblemsRecordById').post(problem.updatePatientRecordById);

    // app.route('/deletePatientProblemsRecordById').post(problem.removePatientRecordById);
};
