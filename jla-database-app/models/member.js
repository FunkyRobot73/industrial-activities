const Sequelize = require("sequelize");
const config = require("./../config");

const Member = config.define("members_tables", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code_name: {
        type:Sequelize.STRING,
        allowNull: false
    },
    secret_identity: {
        type:Sequelize.STRING,
        allowNull: false
    },
    species_52: {
        type:Sequelize.STRING,
        allowNull: false
    },
    age_52: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    home_planet: {
        type:Sequelize.INTEGER,
        allowNull: false
    }
}, {timestamps: false});

module.exports = Member;