// import sequelize constructor from library
const Sequelize = require('sequelize');
// load dotenv
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

// // create connection to db, pass in MySQL information for username & password
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//     port: 3306
// });

module.exports = sequelize;