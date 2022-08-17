var http = require('http');
const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.get('/', (req, res, next) => {
    res.json({ message: "Servidor executado com sucesso!" });

})

var server = http.createServer(app);
server.listen(port);
console.log("Servidor escutando na porta 8080...");