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

