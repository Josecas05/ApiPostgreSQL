const { Model, DataTypes } = require('sequelize');
const REGISTRO_TABLE = 'registro';

class Registro extends Model {
  static config(sequelize) {
      return {
          sequelize,
          tableName: REGISTRO_TABLE,
          modelName: 'registro',
          timestamps: true
      };
  }
} 

const RegistroSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_negocio: {
   type: DataTypes.INTEGER,
   foreignKey:true
  },
  fecha:{
   type: DataTypes.DATE,
  },
  correlativo: {
    type : DataTypes.STRING
  }
};
module.exports = { Registro, RegistroSchema };
