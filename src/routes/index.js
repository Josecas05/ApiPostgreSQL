const express = require('express'); 

const personsRouter = require('./negocio.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router); 
  router.use('/negocio', personsRouter);
  
}

module.exports = routerApi;
