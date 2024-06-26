const express = require('express');
const router = express.Router(); 
const personsController = require('../controllers/negocio.controller');

router
    .get('/registro/:id', personsController.llamarF )
    .get('/', personsController.get )
    .get('/:id', personsController.getById )
    .post('/', personsController.create )
    .put('/:id', personsController.update )
    .delete('/:id', personsController._delete );

module.exports = router;
