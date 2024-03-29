const express = require("express")
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require("./routes/usuarios"))
app.use(require("./routes/eventos"))
app.use(require("./routes/familias"))
app.use(require("./routes/intereses"))

app.listen(process.env.PORT || 3300, () => {
    console.log("Servidor corriendo en el puerto 3300");
});


module.exports = app;