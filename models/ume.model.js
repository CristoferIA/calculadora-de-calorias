const { DataTypes } = require('sequelize');
const { db } = require('../database/db');

const UME = db.define('ume', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  ume: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  significado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  factor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  umeFactor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = UME;
