const Sequelize = require('sequelize');
const sequelize = new Sequelize('notesSaving', 'root', '1234', {
    dialect: 'mysql',
    host: 'localhost'
})
module.exports = sequelize;