const { connection } = require("../../config.db");

const call = `SELECT intereses.idinteres, intereses.nombreInteres FROM eventos
        INNER JOIN intereseseventos ON eventos.idevento = intereseseventos.idevento
        INNER JOIN intereses ON intereseseventos.idinteres = intereses.idinteres
        WHERE eventos.idevento = ?;`

const getInteresesEvento = (request, response) => {

    const idevento = request.params.id

    connection.query(call, [idevento], (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
}

module.exports = getInteresesEvento