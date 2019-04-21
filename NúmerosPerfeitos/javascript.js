'use strict'
function receber(){
let soma = 0
let numero = num.value
for (let divisor = 1; divisor < numero; divisor++){
    if (numero % divisor == 0){
        document.write(`Divisor: ${divisor}<br>`);
        soma = soma +divisor;
    }
}
document.write(`Soma dos divisores: ${soma}<br>`);
if (numero == soma){
document.write("É PERFEITO");
}else{
    document.write("NÃO É PERFEITO");
}
}