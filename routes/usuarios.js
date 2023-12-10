const express = require("express")
const app = express();

const getUsuarios = require('../src/usuarios/getUsuarios')
/*const login = require('../src/usuarios/login')
const logout = require('../src/usuarios/logout')*/

/*app.route("/api/login").get(login);
app.route("/api/logout").get(logout);*/
app.route("/api/usuarios").get(getUsuarios);

module.exports = app