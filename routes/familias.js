const express = require("express")
const app = express();

const postFamilias = require('../src/familias/postFamilias')
const getFamilias = require('../src/familias/getFamilias');

app.route("/api/familias").post(postFamilias);
app.route("/api/familias").get(getFamilias);

module.exports = app
