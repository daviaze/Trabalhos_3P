'use strict'
let numero = prompt('Insira um valor:');
let reajuste1 = (numero / 100);
let reajuste2 = (parseInt(numero) + reajuste1);
    alert (`O reajuste de 1% sobre o seu  valor inicial é: ${reajuste2}`);
