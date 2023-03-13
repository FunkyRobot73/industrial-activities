const Sequelize = require("sequelize");
const config = new Sequelize("jla_membership", "root", "daisy", {dialect: "mariadb"});

module.exports = config;