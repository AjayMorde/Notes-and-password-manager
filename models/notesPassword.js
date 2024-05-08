const Sequelize = require('sequelize');
const sequelize = require('../connection/database');

const notesPassword = sequelize.define('notesPassword', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = notesPassword