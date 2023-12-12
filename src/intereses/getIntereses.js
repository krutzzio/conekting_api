const { connection } = require("../../config.db");

const getIntereses = (request, response) => {
    connection.query("SELECT * FROM intereses",
        (error, results) => {
            error
                ? response.status(500).json({ "error": error })
                : response.status(200).json(results);
        })
}

module.exports = getIntereses;