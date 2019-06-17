const Sequelize = require('sequelize');

const sequelize = new Sequelize('xendit', 'postgres', 'xendittest', {
  dialect: 'postgres',
  host: 'db',
  logging: false,
});

module.exports = sequelize;
