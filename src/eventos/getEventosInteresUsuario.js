const { connection } = require("../../config.db");

const call = `SELECT eventos.*, GROUP_CONCAT(intereses.idinteres) AS intereses_asociados
    FROM eventos
    INNER JOIN intereseseventos ON eventos.idevento = intereseseventos.idevento
    INNER JOIN intereses ON intereseseventos.idinteres = intereses.idinteres
    WHERE intereses.idinteres `


const getEventosInteresUsuario = (request, response) => {

    const intereses = request.headers.intereses

    let sqlCondition = `IN ( ${intereses}) GROUP BY eventos.idevento;`
    
    let callAdded = call
    callAdded += sqlCondition

    connection.query(callAdded, (error, results) => {
        callAdded = call
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getEventosInteresUsuario;