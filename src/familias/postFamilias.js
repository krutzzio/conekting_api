const { connection } = require("../../config.db");

const call1 = `INSERT INTO familias (nombreFamilia, descripcionFamilia)  
        VALUES (?,?)`

const call2 = `INSERT INTO familiasusuarios (idusuario, idfamilia, organizadorFamilia)  
        VALUES (?,?,?)`

const postFamilias = (request, response) => {
    const { nombreFamilia, descripcionFamilia, idusuario } = request.body;

    connection.query(call1, [nombreFamilia, descripcionFamilia],
        (error, results) => {
            const idfamilia = results.insertId
            error
                ? response.status(500).json({ "error": error })
                : connection.query(call2, [idusuario, idfamilia, 1],
                    (error, results) => {
                        error
                            ? response.status(500).json({ "error": error })
                            : response.status(201).json({ idfamilia });
                    }
                )
        }
    )
}

module.exports = postFamilias;