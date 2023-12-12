const { connection } = require("../../config.db");

const getFamilias = (request, response) => {
    connection.query("SELECT * FROM familias",
        (error, results) => {
            error
                ? response.status(500).json({ "error": error })
                : response.status(200).json(results);
        })
}

module.exports = getFamilias;