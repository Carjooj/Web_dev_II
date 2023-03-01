var tabuada = require('./tabuada.js')


var http = require('http')
const soma = require('./soma.js')

http.createServer (function(req, res){
    res.end()
}).listen(8081)

console.log("on")