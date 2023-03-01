const express = require("express")
const app = express()

app.get("/", function(req, res) {
    res.sendFile(__dirname + "html/index.html")
})

app.get("/produto/:item/:quantidade", function(req, res) {
    res.send("Item " + req.params.item + " <br>Quantidade " + req.params.quantidade)
})


app.listen(8081, function() {
    console.log("rodou")
})


var http = require('http')
const soma = require('./soma.js')

http.createServer (function(req, res){
    res.end()
}).listen(8081)

console.log("on")
