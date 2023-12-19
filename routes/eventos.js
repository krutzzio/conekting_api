const express = require("express")
const app = express();

const getEventos = require('../src/eventos/getEventos')
const getEvento = require('../src/eventos/getEvento')
const getMiembrosEvento = require('../src/eventos/getMiembrosEvento')
const getEventosFamilia = require('../src/eventos/getEventosFamilia')
const getEventosUsuario = require('../src/eventos/getEventosUsuario')
const getInfoEvento = require('../src/eventos/getInfoEvento')
const getEventosInteres = require('../src/eventos/getEventosInteres')
const getEventosInteresUsuario = require('../src/eventos/getEventosInteresUsuario')

const postEvento = require('../src/eventos/postEvento')
const postUnirteEvento = require('../src/eventos/postUnirteEvento')


app.route("/api/eventos").get(getEventos);
app.route("/api/eventos/:id").get(getEvento);
app.route("/api/miembrosevento/:id").get(getMiembrosEvento);
app.route("/api/eventosfamilia/:id").get(getEventosFamilia);
app.route("/api/eventosusuario/:id").get(getEventosUsuario);
app.route("/api/infoevento/:id").get(getInfoEvento);
app.route("/api/eventosinteres").get(getEventosInteres);
app.route("/api/eventosinteresusuario").get(getEventosInteresUsuario);

app.route("/api/eventos").post(postEvento);
app.route("/api/unirteevento").post(postUnirteEvento);


module.exports = app