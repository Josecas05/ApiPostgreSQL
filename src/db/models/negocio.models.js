const { Model, DataTypes } = require('sequelize');

const NEGOCIO_TABLE = 'negocio';

class Negocio extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: NEGOCIO_TABLE,
            modelName: 'Negocio',
            timestamps: true
        };
    }
} 

const NegocioSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre_negocio: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre_negocio'
    }
};
  
module.exports = { Negocio, NegocioSchema };
