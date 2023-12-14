const { connection } = require("../../config.db");

const call = `INSERT INTO eventosusuarios (idusuario, idevento, organizadorEvento)  
        VALUES (?,?,?)`

const postUnirteEvento = (request, response) => {
    const { idusuario, idevento } = request.body;

    connection.query(call, [idusuario, idevento, null],
        (error, results) => {
            error
                ? response.status(500).json({ "error": error })
                : response.status(201).json({
                    "Te has unido a la familia!":
                        results.affectedRows
                });
        }
    )
}
module.exports = postUnirteEvento;