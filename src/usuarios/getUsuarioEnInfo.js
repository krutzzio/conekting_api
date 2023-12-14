const { connection } = require("../../config.db");

const call = `SELECT
    EXISTS (
        SELECT 1
        FROM familiasusuarios
        WHERE idusuario = ? AND idfamilia = ?
    ) AS usuarioEnFamilia,
    EXISTS (
        SELECT 1
        FROM eventosusuarios
        WHERE idusuario = ? AND idevento = ?
    ) AS usuarioEnEvento;`

const getUsuarioEnInfo = (request, response) => {

    const idusuario = request.headers.idusuario
    const idfamilia = request.headers.idfamilia
    const idevento = request.headers.idevento

    connection.query(call, [idusuario, idfamilia, idusuario, idevento ], (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getUsuarioEnInfo