'use strict'
let resp = prompt("Deseja calcular o IMC ? sim(1) | não(2)");
if (resp == 1){
let peso = prompt("Insira peso:");
let altura = prompt("Insira altura (ex: 1.90):");

let imc = (peso/(altura*altura));
typeof +imc;
let resultado =(imc.toFixed(2));


  if(resultado<18.5){
  alert(`Você está abaixo do peso !  Indice: ${resultado}`);
  }
    else if(resultado>=18.5 && resultado<24.9){
    alert(`Você está com peso normal !  Indice: ${resultado}`);
    }
      else if(resultado>=25 && resultado<29.9) {
      alert(`Você está com sobre peso !  Indice: ${resultado}`);
      }
        else if(resultado>=30 && resultado<34.9){
        alert(`Você está com obesidade grau 3 !  Indice: ${resultado}`);
        }
          else if(resultado>=35 && resultado<39.9) {
          alert(`Você está com obesidade grau 2 !  Indice: ${resultado}`);
          }
            else if (resultado>40){
            alert(`Você está com obesidade grau 3 !  Indice: ${resultado}`);
            }
  alert("Volte Sempre!")
    }else{
      alert("Volte sempre!")
  window.close();
}
