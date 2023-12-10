const { connection } = require("../../config.db");

const call = `SELECT * FROM familias 
    INNER JOIN eventos 
    ON familias.idfamilias = eventos.idfamilia`

const getUsuarios = (request, response) => {
    connection.query(call, (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getUsuarios;