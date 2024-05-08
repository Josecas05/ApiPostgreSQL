const { restart } = require("nodemon");
const sequelize = require("../libs/sequelize");
const { models } = require("../libs/sequelize");
const { QueryTypes, json } = require("sequelize");
class NegocioService {
  constructor() {}

  async find() {
    const res = await models.Negocio.findAll();
    return res;
  }

  async findOne(id) {
    const res = await models.Negocio.findByPk(id);
    return res;
  }

  async create(data) {
    const res = await models.Negocio.create(data);
    return res;
  }

  async update(id, data) {
    const model = await this.findOne(id);
    const res = await model.update(data);
    return res;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { deleted: true };
  }

  async FuncionCorrelativo(id) {
    const negocio = await sequelize.query("SELECT insertar_registro(:id); ", {
      replacements: { id },
      type: QueryTypes.SELECT,
    });
    // Extraer el valor '25' del array
    const negocioId = negocio[0].insertar_registro;

    const datos = await sequelize.query(
      "SELECT * FROM registro where id = (:negocioId); ",
      {
        replacements: { negocioId },
        type: QueryTypes.SELECT,
      }
    );
    
    const primerElemento = datos[0];
    console.log(primerElemento)

    
    try {
        const respuesta = await fetch('http://localhost:9000/api/registroParqueo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(primerElemento)
        });

        if (!respuesta.ok) {
            throw new Error(`Error al enviar datos : ${respuesta.status} ${respuesta.statusText}`);
        }

        const respuestaJSON = await respuesta.json();
        console.log('Datos enviados con éxito a :', respuestaJSON);
        return respuestaJSON;
    } catch (error) {
        console.error('Error al enviar datos a :', error);
        throw error; 
    }
    return primerElemento;
  }
}

module.exports = NegocioService;
