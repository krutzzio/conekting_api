const {connection} = require("../../config.db");

    const call = `INSERT INTO familias (nombreFamilia, descripcionFamilia)  
VALUES (?,?)`

const postFamilias = (request, response) => {
    const {nombreFamilia, descripcionFamilia} = request.body;
    
    connection.query(call,[nombreFamilia,descripcionFamilia],
        (error, results) => {
            error
            ?
            response.status(500).json({"error": error})
            :
            response.status(201).json({"Familia creada correctamente!":
            results.affectedRows});   
        }
    )}
    module.exports = postFamilias;