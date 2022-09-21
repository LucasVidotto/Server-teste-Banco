var http = require('http');
const express = require("express");
const app = express();
const mysql = require("mysql2");

const port = process.env.PORT || 8080;
app.use(require("cors")());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createPool({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b2156159895f11",
    password: "dc93ac56", 
    database: "heroku_4c31ca42ef0d3c4",
});
app.get('/', (req, res, next) => {
    res.json({ message: "Servidor executado com sucesso!" });

})

app.get('/banco',(req, res, next) => {
    res.json({ message: "Servidor executado com sucesso!" });

})

app.get('/users', (req, res, next) => {
    db.query("SELECT * FROM teste  ", (err, result) => {
        if (err) console.log(err);
        else {
            res.send(result);
        }
    })
})



var server = http.createServer(app);
server.listen(port);
console.log("Servidor escutando na porta 8080...");