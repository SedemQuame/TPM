// jshint esversion:6
// creating tables in database.
exports.createDbSetup = (con) => {
    con.connect((err) => {
        if(err){
            throw err;
        }else{
            console.log(`Connected to database`);
            let createPatientTable = `CREATE TABLE IF NOT EXISTS patients (
                id VARCHAR(20) NOT NULL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                address VARCHAR(255) NOT NULL,
                birth_date Date NOT NULL,
                gender VARCHAR(255) NOT NULL,
                contact_by VARCHAR(255) NOT NULL,
                phone VARCHAR(255) NOT NULL,
                race VARCHAR(255) NOT NULL,
                languages VARCHAR(255) NOT NULL,
                employment_status VARCHAR(255) NOT NULL,
                email_address VARCHAR(255) NOT NULL,
                marital_status VARCHAR(255) NOT NULL
            )`;
            con.query(createPatientTable, function (err, result) {
              if (err) throw err;
              console.log("Patients table created");
            });
    
            let createProblemTable = `CREATE TABLE IF NOT EXISTS problem (
                problem_id VARCHAR(20) NOT NULL PRIMARY KEY,
                user_id VARCHAR(255) NOT NULL,
                diagnosed_illness VARCHAR(255) NOT NULL,
                prescribed_medications VARCHAR(255) NOT NULL,
                birth_date Date NOT NULL,
                report VARCHAR(255) NOT NULL
            )`;
            con.query(createProblemTable, function (err, result) {
                if (err) throw err;
                console.log("Problems table created");
              });
    
            //   closing connection
            con.end(() => {
                // The connection has been closed
                console.log(`The connection closed.`);
            });
        }
    });
};

// inserting data into the database
exports.insertIntoDb = (con, req) => {
    console.log(`Inserting data into the database.`);
    con.connect((err) => {
        if(err){
            throw err;
        }else{
            console.log(`Connected to database`);
            let insertIntoPatientTable = `
                INSERT INTO patients
                ('name','address','birth_date','gender','contact_by','phone','race','languages','employment_status','email_address','marital_status')
                VALUES
                (${req.body.name},${req.body.address},${req.body.birth_date},${req.body.gender},${req.body.contact_by},${req.body.phone},
                ${req.body.race},${req.body.languages},${req.body.employment_status},${req.body.email_address},${req.body.marital_status});
            `;

            con.query(insertIntoPatientTable, function (err, result) {
              if (err) throw err;
              console.log("Patients table created");
            });
    
            //   closing connection
            con.end(() => {
                // The connection has been closed
                console.log(`The connection closed.`);
            });
        }
    });
};

// selecting data from the database
exports.selectFromDb = (con, req) => {
    console.log(`Selecting data, from the database.`);
};

// updating data from the database
exports.updateFromDb = (con, req) => {
    console.log(`Updating data, from the database`);
    
};

// deleting data from the database
exports.deleteFromDb = (con, req) => {
    console.log(`Removing data from the database.`);
};

// deleting data from the database
exports.deleteAllFromDb = (con, req) => {
    console.log(`Removing all data from the database.`);
};