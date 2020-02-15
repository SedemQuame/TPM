// jshint esversion:6
const problem = require('../controllers/problem.controllers');

// ================================ creating list application route ===================================//
module.exports = app => {

    // //========================================== Creating HTTP Methods ============================================//

    app.route('/createProblemRecord').post(problem.createNewProblem);    

    app.route('/getPatientProblemRecord').post(problem.getPatientProblemHistory);

    app.route('/updatePatientProblemsRecord').post(problem.updatePatientHistory);

    app.route('/deletePatientProblemsRecord').post(problem.removePatientHistory);
};
