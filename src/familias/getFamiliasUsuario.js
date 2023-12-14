const { connection } = require("../../config.db");

const call = `SELECT * FROM familias
        INNER JOIN familiasusuarios ON familias.idfamilia = familiasusuarios.idfamilia
        INNER JOIN usuarios ON familiasusuarios.idusuario = usuarios.idusuario
        WHERE usuarios.idusuario = ?;`

const getFamiliasUsuario = (request, response) => {

    const id = request.params.id

    connection.query(call, [id], (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getFamiliasUsuario;