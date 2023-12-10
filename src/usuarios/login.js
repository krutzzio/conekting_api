const { conexion } = require('../../config.db')
const crypto = require('crypto');

const login = (req, res) => {

    const email = req.headers.email
    const password = req.headers.password

    conexion.query("SELECT * FROM usuarios WHERE email = ?", [email],
        (error, results) => {
            if (error) {
                res.status(500).json({ "error": error })
            } else {
                if (results.length == 0 || results[0].password !== password) {
                    res.status(401).json({ error: 'credenciales incorrectas' });
                } else {
                    const token = crypto.randomUUID()
                    conexion.query("UPDATE usuarios SET token = ? WHERE email = ?", [token, email],
                        (error, results) => {
                            error
                                ? res.status(500).json({ error: 'Internal server error' })
                                : res.status(200).json({ token: token })
                        })
                }
            }
        })
}

module.exports = login