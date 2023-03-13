const Sequelize = require('sequelize');
const config = require('./../config')  //  ***possible ERROR HERE

const Planet = config.define('planet_table', {
    id_planet: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    planet_name: {
        type: Sequelize.STRING,
        allowNull: false
        }
    }, {timestamps: false});

    module.exports= Planet;