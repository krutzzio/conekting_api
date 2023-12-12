const express = require("express")
const app = express();

const getIntereses = require('../src/intereses/getIntereses')
app.route("/api/intereses").get(getIntereses);

module.exports = app