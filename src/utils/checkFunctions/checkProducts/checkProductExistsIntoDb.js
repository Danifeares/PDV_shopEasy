const knex = require('../../../connections/dbConnection');

const checkProductExistsIntoDb= async (descricao) => {
  const productExists = await knex('produtos').where({ descricao }).first().returning('*')

  if (productExists){
    throw {
      code: 404,
      message: "Produto já cadastrado"
    }
  }
}

module.exports = checkProductExistsIntoDb