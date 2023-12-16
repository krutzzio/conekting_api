const express = require("express")
const app = express();

const getIntereses = require('../src/intereses/getIntereses')
const getInteresInUsuario = require('../src/intereses/getInteresInUsuario')
const getInteresesUsuario = require('../src/intereses/getInteresesUsuario')
const getInteresesEvento = require('../src/intereses/getInteresesEvento')

const postInteresUsuario = require('../src/intereses/postInteresUsuario')

app.route("/api/intereses").get(getIntereses);
app.route("/api/getinteresinusuario").get(getInteresInUsuario);
app.route("/api/getinteresesusuario/:id").get(getInteresesUsuario);
app.route("/api/getinteresesevento/:id").get(getInteresesEvento);

app.route("/api/postinteresusuario").post(postInteresUsuario);

module.exports = app
