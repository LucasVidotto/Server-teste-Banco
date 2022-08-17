var http = require('http');
const express = require("express");
const app = express();

app.get('/', (req, res, next) => {
    res.json({ message: "Servidor executado com sucesso!" });

})

var server = http.createServer(app);
server.listen(8080);
console.log("Servidor escutando na porta 8080...")