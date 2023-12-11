const express = require("express")
const app = express();

/*const getUsuarios = require('../src/getEvento')
const login = require('../src/getEventosUsuarios')*/
const getEventosFamilia = require('../src/eventos/getEventosFamilia')
const getEvento = require('../src/eventos/getEvento')

app.route("/api/eventosfamilia").get(getEventosFamilia);
app.route("/api/eventos/:id").get(getEvento);

module.exports = app