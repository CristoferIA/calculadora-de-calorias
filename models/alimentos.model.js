const { DataTypes } = require('sequelize');
const { db } = require('../database/db');

const Alimentos = db.define('alimentos', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  alimento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  racion: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  ume: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carbohidratos: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  grasas: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  proteinas: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  fibra: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  alcohol: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  umeNutrientes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoAlimentoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Alimentos;
