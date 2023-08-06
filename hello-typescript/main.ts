var minhaVar = 'minha variavel';

function minhaFunc(x, y) {
    return x + y;
}

// Ecmas 6 ou 2015
let num = 2;     //Quando compila o arquivo js transforma em var
const PI = 3.14;

var numeros = [1,2,3];

numeros.map(function(valor) {
    return valor * 2;
});

numeros.map(valor => valor * 2); //Ecmas 2015
