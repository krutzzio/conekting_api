const express = require("express")
const app = express();

/*const getUsuarios = require('../src/getEvento')
const login = require('../src/getEventosUsuarios')*/
const getEventosFamilia = require('../src/eventos/getEventosFamilia')

app.route("/api/eventosfamilia").get(getEventosFamilia);

module.exports = app