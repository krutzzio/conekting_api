const express = require("express")
const app = express();

const postFamilias = require('../src/familias/postFamilias')
const getFamilias = require('../src/familias/getFamilias');
const getFamilia = require('../src/familias/getFamilia')


app.route("/api/familias").post(postFamilias);
app.route("/api/familias").get(getFamilias);
app.route("/api/familia/:id").get(getFamilia);


module.exports = app
