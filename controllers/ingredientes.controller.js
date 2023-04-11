const Alimentos = require('../models/alimentos.model');
const catchAsync = require('../utils/catchAsync');

exports.findAlimentos = catchAsync(async (req, res, next) => {
  const alimentos = await Alimentos.findAll();
  res.status(200).json({
    status: 'success',
    message: 'The ingredients found were successfully',
    alimentos,
  });
});
