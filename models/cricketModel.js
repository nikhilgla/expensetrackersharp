const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Cricket = sequelize.define('cricket', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  dob: Sequelize.STRING,
  pic: Sequelize.STRING,
  career: Sequelize.STRING,
  bplace: Sequelize.STRING,
  runs: Sequelize.DOUBLE,
  matches: Sequelize.DOUBLE,
  avg: Sequelize.DOUBLE,
  wickets: Sequelize.DOUBLE,
  fifty: Sequelize.DOUBLE,
  hundred: Sequelize.DOUBLE,
  
});

module.exports = Cricket;