// jshint esversion:6
const dotenv = require('dotenv');
require('dotenv').config({ path: '../'});

module.exports = {
    // mongo db url
    // infDHl4H4v9PGXHE
    mongoDBUrl: `mongodb+srv://medic_metric:infDHl4H4v9PGXHE@cluster0-86nth.mongodb.net/test?retryWrites=true&w=majority`,
    mongoDBOptions: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    },
    // postgresql db url


    // mysql db url
    mysqlOptions: {
        host:`127.0.0.1`,
        user:`root`,
        password:``,
        database:`medmetricusa`
    }
};