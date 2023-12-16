const { connection } = require("../../config.db");

const call = `SELECT intereses.idinteres, intereses.nombreInteres FROM usuarios
        INNER JOIN interesesusuarios ON usuarios.idusuario = interesesusuarios.idusuario
        INNER JOIN intereses ON interesesusuarios.idinteres = intereses.idinteres
        WHERE usuarios.idusuario = ?;`

const getInteresesUsuario = (request, response) => {

    const idusuario = request.params.id

    connection.query(call, [idusuario], (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getInteresesUsuario