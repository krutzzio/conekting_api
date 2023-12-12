const { connection } = require("../../config.db");

const call = `SELECT * FROM familias
        INNER JOIN familiasusuarios ON familias.idfamilia = familiasusuarios.idfamilia
        INNER JOIN usuarios ON familiasusuarios.idusuario = usuarios.idusuario
        WHERE familiasusuarios.organizadorFamilia = 1`

const getFamilias = (request, response) => {
    connection.query(call,
        (error, results) => {
            error
                ? response.status(500).json({ "error": error })
                : response.status(200).json(results);
        })
}

module.exports = getFamilias;