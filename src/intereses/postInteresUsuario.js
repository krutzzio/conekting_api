const { connection } = require("../../config.db");

const call = `INSERT INTO interesesusuarios (idusuario, idinteres)  
        VALUES (?,?)`

const postInteresUsuario = (request, response) => {
    const { idusuario, idinteres } = request.body;

    connection.query(call, [idusuario, idinteres],
        (error, results) => {
            error
                ? response.status(500).json({ "error": error })
                : response.status(201).json({
                    "Interes añadido!":
                        results.affectedRows
                });
        }
    )
}
module.exports = postInteresUsuario;