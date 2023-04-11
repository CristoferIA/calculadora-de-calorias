const { Router } = require('express');
const { findAlimentos } = require('../controllers/ingredientes.controller');
const { findUMES } = require('../controllers/ume.controller');

const router = Router();
router.get('/', findAlimentos);
router.get('/ume', findUMES);

module.exports = {
  alimentosRouter: router,
};
