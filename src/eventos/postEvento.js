const {connection} = require("../../config.db");

const call = `INSERT INTO usuarios (nombreEvento, descripcionEvento, fechaEvento, calleEvento, numerocalleEvento, cpEvento)  
VALUES (?,?,?,?,?,?)`