const { connection } = require("../../config.db");

const call = `select eventos.*, intereses.* from eventos
inner join intereseseventos on eventos.idevento = intereseseventos.idevento
inner join intereses on intereseseventos.idinteres = intereses.idinteres
where intereses.nombreInteres = ?;`

const getEventosInteres = (request, response) => {

    const nombre = request.headers.nombre

    connection.query(call, [nombre], (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
} 

module.exports = getEventosInteres;