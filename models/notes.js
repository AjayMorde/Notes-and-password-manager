const Sequelize = require('sequelize');
const sequelize = require('../connection/database');

const Notes = sequelize.define('notes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    topic: {
        type: Sequelize.STRING,
        allowNull: false
    },


    notes: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Notes;