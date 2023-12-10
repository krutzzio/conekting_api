const { connection } = require("../../config.db");

const getUsuarios = (request, response) => {
    connection.query("SELECT * FROM usuarios",
        (error, results) => {
            error
                ? response.status(500).json({ "error": error })
                : response.status(200).json(results);
        })
}

module.exports = getUsuarios;