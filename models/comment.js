const Sequilize = require('sequelize')

const sequelize = require('../database/database')

const Comment = sequelize.define('comment', {
  id: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  comment: {
    type: Sequilize.STRING,
    allowNull: false
  }
},
{
  timestamps: true,
  paranoid: true
});

module.exports = Comment