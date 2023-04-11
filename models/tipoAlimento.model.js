const { DataTypes } = require('sequelize');
const { db } = require('../database/db');

const TipoAlimento = db.define('tipo_alimento', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  tipoAlimento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = TipoAlimento;
