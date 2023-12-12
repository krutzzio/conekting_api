const { connection } = require('../../config.db')
const crypto = require('crypto');

const login = (req, res) => {

    const usuario = req.headers.usuario
    const password = req.headers.password


    connection.query("SELECT * FROM usuarios WHERE email = ?", [usuario], (error, results) => {
        if (error) {
            res.status(500).json({ "error": error })
        } else {
            if (results.length == 0 || results[0].password !== password) {
                res.status(401).json({ error: 'credenciales incorrectas' });
            } else {
                const token = crypto.randomUUID()
                connection.query("UPDATE usuarios SET token = ? WHERE email = ?", [token, usuario],
                    (error, result) => {
                        error
                            ? res.status(500).json({ error: 'Internal server error' })
                            : res.status(200).json({
                                token: token,
                                idusuario: results[0].idusuario,
                                nombreUsuario: results[0].nombreUsuario,
                                email: results[0].email,
                                cp: results[0].cp,
                                fechaNacimiento: results[0].fechaNacimiento
                            })
                    })
            }
        }
    })
}

module.exports = login