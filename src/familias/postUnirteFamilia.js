const { connection } = require("../../config.db");

const call = `INSERT INTO familiasusuarios (idusuario, idfamilia, organizadorFamilia)  
        VALUES (?,?,?)`

const postUnirteFamilia = (request, response) => {
    const { idusuario, idfamilia } = request.body;

    connection.query(call, [idusuario, idfamilia, null],
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
module.exports = postUnirteFamilia;