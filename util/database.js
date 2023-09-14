const Sequelize =  require('sequelize');

const sequelize = new Sequelize('nodeexpress-sample' , 'root' , 'nikhilsql', {
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;