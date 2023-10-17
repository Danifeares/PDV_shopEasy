const knex = require('../dbConnection')

const updatetUserIntoDatabase = async (nome, email, encryptedPassword) => {
    const register = await knex('usuarios')
        .where({ id })
        .insert({ nome, email, senha: encryptedPassword })
        .returning('*')
    ;
    
    if (!register[0]){
        throw {
            code: 400,
            message: "O usuário não foi atualizado"
        }
    };
}

module.exports = updatetUserIntoDatabase