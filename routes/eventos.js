const express = require("express")
const app = express();

const getEventosFamilia = require('../src/eventos/getEventosFamilia')
const getEvento = require('../src/eventos/getEvento')
const getMiembrosEvento = require('../src/eventos/getMiembrosEvento')
/*const postEvento = require('../src/eventos/postEvento') */


app.route("/api/eventosfamilia").get(getEventosFamilia);
app.route("/api/eventos/:id").get(getEvento);
app.route("/api/miembrosevento/:id").get(getMiembrosEvento);
/*app.route("/api/eventos").post(postEvento);*/


module.exports = app