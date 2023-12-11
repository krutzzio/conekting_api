const {connection} = require("../../config.db");

const call = `INSERT INTO usuarios (nombreUsuario, email, password, cp, fechaNacimiento)  
VALUES (?,?,?,?,?)`

const postUsuarios = (request, response) => {
    const {nombreUsuario, email, password, cp, fechaNacimiento} = request.body;
    
    connection.query(call,[nombreUsuario, email, password, cp, fechaNacimiento],
        (error, results) => {
            error
            ?
            response.status(500).json({"error": error})
            :
            response.status(201).json({"Registro Completo!":
            results.affectedRows});   
        }
    )}
    module.exports = postUsuarios;