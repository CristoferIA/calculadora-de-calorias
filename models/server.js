const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { db } = require('../database/db');
const { alimentosRouter } = require('../routes/alimentos.router');
const globalErrorHandler = require('../controllers/error.controller');
const initModel = require('./init.model');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.paths = {
      alimentos: '/api/v1/alimento',
    };

    this.database();
    this.middleware();
    this.routes();
  }
  middleware() {
    if (process.env.NODE_ENV === 'development') {
      this.app.use(morgan('dev'));
    }
    this.app.use(cors());
    this.app.use(express.json());
  }
  routes() {
    //console.log(alimentosRouter);
    this.app.use(this.paths.alimentos, alimentosRouter);
    this.app.all('*', (req, res, next) => {
      return next(
        new AppError(`¡Can't find ${req.originalUrl} on this server!`, 404)
      );
    });

    this.app.use(globalErrorHandler);
  }

  database() {
    db.authenticate()
      .then(() => console.log('Database authenticated'))
      .catch(error => console.log(error));

    // relations
    initModel();

    db.sync() //{ force: true }
      .then(() => console.log('Database synced'))
      .catch(error => console.log(error));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log('Server is running on port', this.port);
    });
  }
}

module.exports = Server;
