const Alimentos = require('./alimentos.model');
const TipoAlimento = require('./tipoAlimento.model');

const initModel = () => {
  TipoAlimento.hasMany(Alimentos);
  Alimentos.belongsTo(TipoAlimento);
};

module.exports = initModel;
