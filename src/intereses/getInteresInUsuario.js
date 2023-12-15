const { connection } = require("../../config.db");

const call = `SELECT
    EXISTS (
        SELECT 1
        FROM interesesusuarios
        WHERE idusuario = ? AND idinteres = ?
    ) AS interesusuario;`

const getInteresInUsuario = (request, response) => {

    const idusuario = request.headers.idusuario
    const idinteres = request.headers.idinteres

    connection.query(call, [idusuario, idinteres], (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getInteresInUsuario