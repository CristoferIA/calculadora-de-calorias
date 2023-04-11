const UME = require('../models/ume.model');
const catchAsync = require('../utils/catchAsync');

exports.findUMES = catchAsync(async (req, res, next) => {
  const ume = await UME.findAll();
  res.status(200).json({
    status: 'success',
    message: 'The ume found were successfully',
    ume,
  });
});
