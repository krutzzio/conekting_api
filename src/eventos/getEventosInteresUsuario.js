const { connection } = require("../../config.db");

const call = `SELECT eventos.*, intereses.* FROM eventos
    INNER JOIN intereseseventos ON eventos.idevento = intereseseventos.idevento
    INNER JOIN intereses ON intereseseventos.idinteres = intereses.idinteres
    WHERE `

    /*
SELECT eventos.*, GROUP_CONCAT(intereses.idinteres) AS intereses_asociados
FROM eventos
INNER JOIN intereseseventos ON eventos.idevento = intereseseventos.idevento
INNER JOIN intereses ON intereseseventos.idinteres = intereses.idinteres
WHERE intereses.idinteres IN (23, 52, 56, 67, 33, 43, 13, 55, 26, 61, 38, 12, 17, 29)
GROUP BY eventos.idevento;
*/

const getEventosInteresUsuario = (request, response) => {

    const intereses = request.headers.intereses

    let newIntereses = intereses.split(",")
    let sqlCondition = ""
    newIntereses.forEach((interes, index) => {
        if (index === 0) {
            return (
                sqlCondition += `intereses.idinteres = ${interes} `
            )
        } else {
            return (
                sqlCondition += `OR intereses.idinteres = ${interes} `
            )
        }

    })
    let callAdded = call
    callAdded += sqlCondition

    console.log(callAdded)
    connection.query(callAdded, (error, results) => {
        callAdded = call
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getEventosInteresUsuario;