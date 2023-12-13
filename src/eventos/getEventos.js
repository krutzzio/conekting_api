const { connection } = require("../../config.db");

const call = `SELECT * FROM familias
        INNER JOIN eventos ON familias.idfamilia = eventos.idfamilia
        INNER JOIN eventosusuarios ON eventos.idevento = eventosusuarios.idevento
        INNER JOIN usuarios ON eventosusuarios.idusuario = usuarios.idusuario;`

const getEventos = (request, response) => {
    connection.query(call, (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getEventos;