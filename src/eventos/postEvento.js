const { connection } = require("../../config.db");

const call1 = `INSERT INTO eventos (nombreEvento, descripcionEvento, fechaEvento, calleEvento, numerocalleEvento, cpEvento,idfamilia)  
VALUES (?,?,?,?,?,?,?)`

const call2 = `INSERT INTO eventosusuarios (idevento,idusuario,organizadorEvento) 
VALUES (?,?,?)`

const postEvento = (request, response) => {
    const { nombreEvento, descripcionEvento, fechaEvento, calleEvento, numerocalleEvento, cpEvento, idfamilia, idusuario } = request.body;

    connection.query(call1, [nombreEvento, descripcionEvento, fechaEvento, calleEvento, numerocalleEvento, cpEvento, idfamilia],
        (error, results) => {
            const idevento = results.insertId
            error
                ?
                response.status(500).json({ "error": error })
                :
                connection.query(call2, [idevento, idusuario, 1],
                    (error, results) => {
                        error
                            ? response.status(500).json({ "error": error })
                            : response.status(201).json({ "Evento Creado!": results.affectedRows })
                    }
                )
        }
    )
}
module.exports = postEvento;