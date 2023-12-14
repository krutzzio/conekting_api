const express = require("express")
const app = express();

const postFamilias = require('../src/familias/postFamilias')
const postUnirteFamilia = require('../src/familias/postUnirteFamilia')

const getFamilias = require('../src/familias/getFamilias');
const getFamilia = require('../src/familias/getFamilia')
const getMiembrosFamilia = require('../src/familias/getMiembrosFamilia')
const getFamiliasUsuario = require('../src/familias/getFamiliasUsuario')

app.route("/api/familias").post(postFamilias);
app.route("/api/unirtefamilia").post(postUnirteFamilia);

app.route("/api/familias").get(getFamilias);
app.route("/api/familia/:id").get(getFamilia);
app.route("/api/miembrosfamilia/:id").get(getMiembrosFamilia);
app.route("/api/familiasusuario/:id").get(getFamiliasUsuario);


module.exports = app
