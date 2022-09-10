const Sequelize = require('sequelize');

const sequelize = new Sequelize('customer_db', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});


module.exports = sequelize;