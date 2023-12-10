const { conexion } = require('../../config.db')

const logout = (req, res) => {

    const token = req.headers.token

    conexion.query("UPDATE usuarios SET token = NULL WHERE token = ?", [token],
        (error, results) => {
            if (error) {
                res.status(500).json({ "error": error })
            } else {
                res.status(200).json({});
            }
        })
}

module.exports = logout