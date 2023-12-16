const { connection } = require("../../config.db");

const call1 = `INSERT INTO eventos (nombreEvento, descripcionEvento, fechaEvento, calleEvento, numerocalleEvento, cpEvento,idfamilia)  
VALUES (?,?,?,?,?,?,?)`

const call2 = `INSERT INTO eventosusuarios (idevento,idusuario,organizadorEvento) 
VALUES (?,?,?)`

const call3 = `INSERT INTO intereseseventos (idevento,idinteres) 
VALUES (?,?)`

const postEvento = (request, response) => {
    const { nombreEvento, descripcionEvento, fechaEvento, calleEvento, numerocalleEvento, cpEvento, idfamilia, idusuario, idintereses } = request.body;
    connection.query(call1, [nombreEvento, descripcionEvento, fechaEvento, calleEvento, numerocalleEvento, cpEvento, idfamilia],
        (error, results) => {
            const idevento = results.insertId
            error
                ?
                response.status(500).json({ "error": error })
                :
                connection.query(call2, [idevento, idusuario, 1],
                    (error, results) => {
                        if (error) {
                            response.status(500).json({ "error": error })
                        } else {
                            idintereses.forEach(idinteres => connection.query(call3, [idevento, idinteres],
                                (error, results) => {
                                    error &&
                                        response.status(500).json({ "error": error })

                                }
                            ))
                            response.status(201).json({ idevento });
                        }
                    }
                )
        }
    )
}
module.exports = postEvento;