const Sequilize = require('sequelize');

const sequelize = require('../database/database');

const Org = sequelize.define(
  'org',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    orgNm: {
      type: Sequilize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  },
);

module.exports = Org;
