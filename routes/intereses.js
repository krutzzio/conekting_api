const express = require("express")
const app = express();

const getIntereses = require('../src/intereses/getIntereses')
const postInteresUsuario = require('../src/intereses/postInteresUsuario')

app.route("/api/intereses").get(getIntereses);
app.route("/api/postinteresusuario").post(postInteresUsuario);

module.exports = app