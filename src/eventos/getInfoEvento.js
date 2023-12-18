const { connection } = require("../../config.db");

const call = `SELECT f.*, usuarios.* FROM familias f
    INNER JOIN eventos ON f.idfamilia = eventos.idfamilia
    INNER JOIN eventosusuarios ON eventos.idevento = eventosusuarios.idevento
    INNER JOIN usuarios ON eventosusuarios.idusuario = usuarios.idusuario
    WHERE eventos.idevento = ? AND eventosusuarios.organizadorEvento = 1;`

const getInfoEventos = (request, response) => {

    const id = request.params.id

    connection.query(call, [id], (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getInfoEventos;