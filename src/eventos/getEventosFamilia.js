const { connection } = require("../../config.db");

const call = `SELECT * FROM familias
        INNER JOIN eventos ON familias.idfamilias = eventos.idfamilia
        INNER JOIN eventosusuarios ON eventos.ideventos = eventosusuarios.idevento
        INNER JOIN usuarios ON eventosusuarios.idusuario = usuarios.idusuario
        WHERE eventosusuarios.organizadorEvento IS NOT NULL;`

const getUsuarios = (request, response) => {
    connection.query(call, (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getUsuarios;