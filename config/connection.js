// import sequelize constructor from library
const Sequelize = require('sequelize');
// load dotenv
require('dotenv').config();

// create connection to db, pass in MySQL information for username & password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3308
});

module.exports = sequelize;