// jshint esversion:6
// creating tables in database.
exports.createDbSetup = (con) => {
    con.connect((err) => {
        if(err){
            throw err;
        }else{
            console.log(`Connected to database`);
            let createPatientTable = `CREATE TABLE IF NOT EXISTS patients (
                id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
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
                id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
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
            // con.end(() => {
            //     // The connection has been closed
            //     console.log(`The connection closed.`);
            // });
        }
    });
};

// inserting data into the database
exports.insertIntoDb = (con, req, res) => {
    // con.connect((err) => {
    //     if(err){
    //         res.send({err: `Error ${err}.`});
    //         // throw err;
    //     }else{
    if(con){
        console.log(`Connected to database`);
        let dbName = "";

        // (\`${req.query.name}\`,\`${req.query.address}\`,\`${req.query.birth_date}\`
        if(req.query.dbID == "1"){
            dbName = 'medmetricusa';
        }else if(req.query.dbID == "2"){
            dbName = 'medmetricgh';
        }else if(req.query.dbID == "3"){
            dbName = 'medmetricchina';
        }

        let insertIntoPatientTable = `
            INSERT INTO ${dbName}.\`patients\`
            (\`name\`, \`address\`,\`birth_date\`,\`gender\`,\`contact_by\`,\`phone\`,\`race\`,\`languages\`,\`employment_status\`,\`email_address\`,\`marital_status\`)
            VALUES
            ("${req.query.name}", "${req.query.address}", "${req.query.birth_date}", "${req.query.gender}","${req.query.contact_by}","${req.query.phone}",
            "${req.query.race}","${req.query.languages}","${req.query.employment_status}","${req.query.email_address}","${req.query.marital_status}");
        `;

        console.log(insertIntoPatientTable);
            
        con.query(insertIntoPatientTable, function (err, result) {
            if (err){
                throw err;
            }else{
            console.log("Patients table created");
            res.send({msg: `Added new row to the database.`});
            }
        });
    }else{
        res.send({msg: `Cannot insert into db.`});
    }
    
            // //   closing connection
            // con.end(() => {
            //     // The connection has been closed
            //     console.log(`The connection closed.`);
            // });
    //     }
    // });
};

// selecting data from the database
exports.selectFromDb = (con, req, res) => {
    if(con){
        console.log(`Connected to database`);
        let dbName = "";

        // (\`${req.query.name}\`,\`${req.query.address}\`,\`${req.query.birth_date}\`
        if(req.query.dbID == "1"){
            dbName = 'medmetricusa';
        }else if(req.query.dbID == "2"){
            dbName = 'medmetricgh';
        }else if(req.query.dbID == "3"){
            dbName = 'medmetricchina';
        }

        let selectFromPatientTable = `
        SELECT * 
        FROM ${dbName}.patients
        WHERE id=${req.query.id};
        `;

        console.log(selectFromPatientTable);
            
        con.query(selectFromPatientTable, function (err, result) {
            if (err){
                throw err;
            }else{
            console.log("Query successful");
            res.send({result: JSON.stringify(result)});
            }
        });
    }else{
        res.send({msg: `Query unsuccessful.`});
    }
};

// updating data from the database
exports.updateRowInDb = (con, req, res) => {
    console.log(`Updating data, from the database`);
    res.send({msg: `Updating data, from the database`});

};

// deleting data from the database
exports.deleteRowInDbById = (con, req, res) => {
    if(con){
        let dbName = "";
        if(req.query.dbID == "1"){
            dbName = 'medmetricusa';
        }else if(req.query.dbID == "2"){
            dbName = 'medmetricgh';
        }else if(req.query.dbID == "3"){
            dbName = 'medmetricchina';
        }
        let deleteFromPatientTable = `
        DELETE FROM ${dbName}.\`patients\`
        WHERE id=${req.query.id};
        `;
        console.log(deleteFromPatientTable);
        con.query(deleteFromPatientTable, function (err, result) {
            if (err){
                throw err;
            }else{
            console.log("Patients row deleted.");
            res.send({msg: `Deleted row successfully from the database.`});
            }
        });
    }else{
        res.send({msg: `Cannot delete from db.`});
    }
};

// deleting data from the database
exports.deleteAllFromDb = (con, req, res) => {
    if(con){
        console.log(`Connected to database`);
        let dbName = "";

        if(req.query.dbID == "1"){
            dbName = 'medmetricusa';
        }else if(req.query.dbID == "2"){
            dbName = 'medmetricgh';
        }else if(req.query.dbID == "3"){
            dbName = 'medmetricchina';
        }
        let deleteFromPatientTable = `
        DELETE FROM ${dbName}.\`patients\`
        WHERE id>-1;
        `;

        console.log(deleteFromPatientTable);
            
        con.query(deleteFromPatientTable, function (err, result) {
            if (err){
                throw err;
            }else{
            console.log("Patients row deleted.");
            res.send({msg: `Deleted row successfully from the database.`});
            }
        });
    }else{
        res.send({msg: `Cannot delete from db.`});
    }};


    // create a new patient problem record.
    exports.insertIntoProblemDb = (con, req, res) => {
        if(con){
            console.log(`Connected to database`);
            let dbName = "";
            if(req.query.dbID == "1"){
                dbName = 'medmetricusa';
            }else if(req.query.dbID == "2"){
                dbName = 'medmetricgh';
            }else if(req.query.dbID == "3"){
                dbName = 'medmetricchina';
            }
            let insertIntoProblemDb = `
            INSERT INTO ${dbName}.\`problem\`
            (user_id, diagnosed_illness, prescribed_medications, birth_date, report)
            VALUES 
            ("${req.query.user_id}", "${req.query.diagnosed_illness}", "${req.query.prescribed_medications}", "${req.query.birth_date}", "${req.query.report}")`;
    
            console.log(insertIntoProblemDb);
                
            con.query(insertIntoProblemDb, function (err, result) {
                if (err){
                    throw err;
                }else{
                console.log("Patients row deleted.");
                res.send({msg: `Inserted row successfully from the database.`});
                }
            });
        }else{
            res.send({msg: `Cannot delete from db.`});
        }
    };

    // get patient's problem record.
    exports.getPatientProblemDataById = (con, req, res) => {
        if(con){
            console.log(`Connected to database`);
            let dbName = "";
            if(req.query.dbID == "1"){
                dbName = 'medmetricusa';
            }else if(req.query.dbID == "2"){
                dbName = 'medmetricgh';
            }else if(req.query.dbID == "3"){
                dbName = 'medmetricchina';
            }
            let selectAllFromProblemDb = `
            SELECT * 
            FROM ${dbName}.\`problem\`
            WHERE id=${req.query.id};
            `;
    
            console.log(selectAllFromProblemDb);
                
            con.query(selectAllFromProblemDb, function (err, result) {
                if (err){
                    throw err;
                }else{
                console.log("Query successful.");
                res.send(result);
                }
            });
        }else{
            res.send({msg: `Cannot delete from db.`});
        }
    };

    exports.getAllPatientProblemRecords = (con, req, res) => {
        if(con){
            console.log(`Connected to database`);
            let dbName = "";
            if(req.query.dbID == "1"){
                dbName = 'medmetricusa';
            }else if(req.query.dbID == "2"){
                dbName = 'medmetricgh';
            }else if(req.query.dbID == "3"){
                dbName = 'medmetricchina';
            }
            let selectAllFromProblemDb = `
            SELECT * 
            FROM ${dbName}.\`problem\`;
            `;
    
            console.log(selectAllFromProblemDb);
                
            con.query(selectAllFromProblemDb, function (err, result) {
                if (err){
                    throw err;
                }else{
                console.log("Query successful.");
                res.send({result: result});
                }
            });
        }else{
            res.send({msg: `Cannot delete from db.`});
        }
    };

    exports.deletePatientProblemRecords = (con, req, res) => {
        if(con){
            console.log(`Connected to database`);
            let dbName = "";
            if(req.query.dbID == "1"){
                dbName = 'medmetricusa';
            }else if(req.query.dbID == "2"){
                dbName = 'medmetricgh';
            }else if(req.query.dbID == "3"){
                dbName = 'medmetricchina';
            }
            let deleteFromProblemDb = `
            DELETE
            FROM ${dbName}.\`problem\`
            WHERE id=${req.query.id};
            `;
    
            console.log(deleteFromProblemDb);
                
            con.query(deleteFromProblemDb, function (err, result) {
                if (err){
                    throw err;
                }else{
                console.log("Query successful.");
                res.send({result: result});
                }
            });
        }else{
            res.send({msg: `Cannot delete from db.`});
        }
    };
