// jshint esversion:6
// ================================ creating list application route ===================================//
module.exports = app => {
    const problem = require('../controllers/problem.controllers');

    // //========================================== Creating HTTP Methods ============================================//

    app.route('/createProblemRecord').post(problem.createNewPatient);    

    app.route('/getPatientProblemRecord').post(problem.getPatientData);

    app.route('/updatePatientProblemsRecord').post(problem.updatePatientData);

    app.route('/deletePatientProblemsRecord').post(problem.removePatient);
};
