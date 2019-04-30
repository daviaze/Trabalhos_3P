'use strict'
alert("Bem vindo à calculadora da sua saúde !!")
let altura = prompt("Qual sua altura ? (ex: 1.90)")
let peso = prompt("Qual seu peso ? (ex: 90)")
const imc = (a, p) => (p / (a * a))//função utilizando arrow em uma variável
if (imc(altura, peso) < 18,5){
    alert(`Você está abaixo do peso com indice: ${imc(altura, peso)}`);
}else if (((imc(altura, peso)) >= 18,5) && ((imc(altura, peso)) < 24,9)) {
    alert(`Você está com peso normal com indice: ${imc(altura, peso)}`);
}else if (((imc(altura, peso)) >= 25) && ((imc(altura, peso)) < 29,9)){
    alert(`Você está com sobrepseo com indice: ${imc(altura, peso)}`);
}else if (((imc(altura, peso)) >= 30) && ((imc(altura, peso)) < 34,9)){
    alert(`Você está com obesidade grau 1 com indice: ${imc(altura, peso)}`);
}else if (((imc(altura, peso)) >= 35) && ((imc(altura, peso)) < 39,9)){
    alert(`Você está com obesidade grau 2 com indice: ${imc(altura, peso)}`);
}else if (imc(altura, peso) > 40){
    alert(`Você está com obesidade grau 3 com indice: ${imc(altura, peso)}`);
}