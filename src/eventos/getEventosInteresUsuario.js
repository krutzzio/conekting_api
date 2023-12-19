const { connection } = require("../../config.db");

const call = `select eventos.*, intereses.* from eventos
    inner join intereseseventos on eventos.idevento = intereseseventos.idevento
    inner join intereses on intereseseventos.idinteres = intereses.idinteres
    where intereses.nombreInteres = ?;`

const getEventosInteresUsuario = (request, response) => {

    const intereses = request.headers.intereses

    let sqlCondition = ""
    console.log(intereses.split("},{"), typeof(intereses))

    intereses.forEach(interes => {
        return(
            sqlCondition += `AND intereses.nombreInteres = ${interes.idinteres}`
        )
    })
    console.log(intereses, sqlCondition)
    
    connection.query(call, [nombre], (error, results) => {
        error
            ? response.status(500).json({ "error": error })
            : response.status(200).json(results);
    })
} 

module.exports = getEventosInteresUsuario;