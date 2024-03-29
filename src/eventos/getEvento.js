const { connection } = require("../../config.db");

const call = `SELECT * FROM usuarios
        INNER JOIN eventosusuarios ON usuarios.idusuario  = eventosusuarios.idusuario
        INNER JOIN eventos ON eventosusuarios.idevento = eventos.idevento
        INNER JOIN familias ON eventos.idfamilia = familias.idfamilia
        WHERE eventosusuarios.organizadorEvento = 1 AND  eventos.idevento = ?;`

const getEvento = (request, response) => {

    const id = request.params.id;

    connection.query(call, [id], (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getEvento;