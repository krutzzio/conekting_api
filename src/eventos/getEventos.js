const { connection } = require("../../config.db");

const call = `SELECT e.*
    FROM eventos e
    LEFT JOIN eventosusuarios eu ON e.idevento = eu.idevento AND eu.idusuario = ?
    WHERE eu.idevento IS NULL;`
        
const getEventos = (request, response) => {

    const id = request.headers.idusuario

    connection.query(call,[id], (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getEventos;