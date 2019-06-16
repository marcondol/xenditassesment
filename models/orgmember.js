const Sequilize = require('sequelize')

const sequelize = require('../database/database')

const OrgMember = sequelize.define('orgmember', {
  id: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  firstName: {
    type: Sequilize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequilize.STRING,
    allowNull: false
  }
},
{
  timestamps: true,
  paranoid: true
});

module.exports = OrgMember