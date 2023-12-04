const express = require("express")
const app = express();

const getUsuarios = require('../src/getUsuarios')
app.route("/api/usuarios").get(getUsuarios);

module.exports = app