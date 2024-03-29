const { connection } = require('../../config.db')

const call = `SELECT * FROM usuarios
INNER JOIN familiasusuarios ON usuarios.idusuario = familiasusuarios.idusuario
WHERE familiasusuarios.idfamilia = ?;`

const getMiembrosFamilia = (request, response) => {

    const id = request.params.id

    connection.query(call, [id], (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getMiembrosFamilia