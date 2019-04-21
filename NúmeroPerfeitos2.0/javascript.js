'use strict'
for (let contador = 2; contador <= 500; contador++){
    let soma = 0
  for (let divisor = 1; divisor < contador; divisor++){
      if (contador % divisor == 0){
        soma = soma +divisor;
              }else{
                 soma = soma;
                 }
    if (soma == contador){
        console.log(`${contador} PERFEITO!`)
    }else{
        console.log(`${contador} NÃO É PERFEITO!`)
    }
}
}

    
        





