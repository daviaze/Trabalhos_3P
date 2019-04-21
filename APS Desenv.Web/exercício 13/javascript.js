"use strict";
alert ("DESCUBRA ANOS BISSEXTOS!")
let a = prompt ("Digite um ano inicial:");
let f = prompt ("Digite um ano final:");

while (a <= f){
  if ( (a % 4 == 0) && ((a % 100 != 0) || (a % 400 == 0))) {
    document.write(`ANO BISSEXTO : ${a} <br>`)
  }
  else {
    document.write(`ANO NÃO BISSEXTO : ${a}<br>`)
  }
  a++;
}
