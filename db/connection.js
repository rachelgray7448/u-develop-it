const mysql = require('mysql2');

// connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '2016LunaTuna!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;