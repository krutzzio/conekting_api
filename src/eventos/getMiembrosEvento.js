const { connection } = require("../../config.db");

const call = `SELECT usuarios.nombreUsuario, usuarios.idusuario FROM usuarios
        INNER JOIN eventosusuarios ON usuarios.idusuario  = eventosusuarios.idusuario
        INNER JOIN eventos ON eventosusuarios.idevento = eventos.idevento
        WHERE eventos.idevento = ?; `

const getMiembrosEvento = (request, response) => {

    const id = request.params.id;

    connection.query(call, [id], (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getMiembrosEvento;