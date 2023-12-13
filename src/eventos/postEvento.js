const {connection} = require("../../config.db");

const call = `INSERT INTO eventos (nombreEvento, descripcionEvento, fechaEvento, calleEvento, numerocalleEvento, cpEvento)  
VALUES (?,?,?,?,?,?)`

const postEvento = (request, response) => {
    const {nombreEvento,descripcionEvento,fechaEvento,calleEvento,numerocalleEvento, cpEvento} = request.body;
    
    connection.query(call,[nombreEvento, descripcionEvento, fechaEvento,calleEvento, numerocalleEvento,cpEvento ],
        (error, results) => {
            error
            ?
            response.status(500).json({"error": error})
            :
            response.status(201).json({"Registro Completo!":
            results.affectedRows});   
        }
    )}
    module.exports = postEvento;