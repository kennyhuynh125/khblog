const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
    getClient: (callback) => {
        pool.connect((err, client, done) => {
            callback(err, client, done);
        });
    }
}
