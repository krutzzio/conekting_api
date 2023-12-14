const express = require("express")
const app = express();

const getUsuarios = require('../src/usuarios/getUsuarios')
const getUsuarioEnInfo = require('../src/usuarios/getUsuarioEnInfo')

const postUsuarios = require ('../src/usuarios/postUsuarios')

const login = require('../src/usuarios/login')
const logout = require('../src/usuarios/logout')


app.route("/api/usuarios").get(getUsuarios);
app.route("/api/usuarioeninfo").get(getUsuarioEnInfo);

app.route("/api/usuarios").post(postUsuarios);

app.route("/api/login").get(login);
app.route("/api/logout").get(logout);

module.exports = app