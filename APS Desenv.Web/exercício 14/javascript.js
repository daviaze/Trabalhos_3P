'use strict'
let numero = prompt("Insira um número:");
let contador = 0;
for (var i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      contador++;
    }
}
    if (contador == 2) {
      alert ("É PRIMO")
    }
      else {
        alert("NÃO É PRIMO")
      }
