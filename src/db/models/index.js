const { Negocio, NegocioSchema } = require('./negocio.models');
function setupModels(sequelize) {
    Negocio.init(NegocioSchema, Negocio.config(sequelize));
}


module.exports = setupModels;
