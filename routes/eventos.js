const express = require("express")
const app = express();

const getEventos = require('../src/eventos/getEventos')
const getEvento = require('../src/eventos/getEvento')
const getMiembrosEvento = require('../src/eventos/getMiembrosEvento')
const getEventosFamilia = require('../src/eventos/getEventosFamilia')
const getEventosUsuario = require('../src/eventos/getEventosUsuario')
const postEvento = require('../src/eventos/postEvento')


app.route("/api/eventos").get(getEventos);
app.route("/api/eventos/:id").get(getEvento);
app.route("/api/miembrosevento/:id").get(getMiembrosEvento);
app.route("/api/eventosfamilia/:id").get(getEventosFamilia);
app.route("/api/eventosusuario/:id").get(getEventosUsuario);
app.route("/api/eventos").post(postEvento);


module.exports = app