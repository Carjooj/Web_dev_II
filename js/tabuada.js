var tabuada = function(n1, n2){
    var i = 0;
    for (i = 0; i <= n2; i++){
        var resultado = n1 * i
        console.log(n1 + " X " + i + " = " + resultado)
    }
}

module.exports = tabuada