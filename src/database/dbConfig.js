require('dotenv').config();
const { Pool } = require('pg');
const { init } = require('../app');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const database = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    allowExitOnIdle: true
})


const initDatabase = () => {

    return `
        CREATE TABLE IF NOT EXISTS usuarios (
            id SERIAL PRIMARY KEY,
            email VARCHAR(256) UNIQUE NOT NULL,
            password VARCHAR(256) NOT NULL,
            role VARCHAR(20) DEFAULT 'customer' CHECK(role IN('admin', 'customer'))
        )
    `;
}



module.exports = { database, initDatabase };
