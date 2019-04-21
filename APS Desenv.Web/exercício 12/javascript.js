'use strict'
let contador = 0;
function capturar(){
  let resp = prompt("OI MEU FILHO, COMO TA AS NAMORADINHAS ?")
  while (resp != "TCHAU") {
    let dialogo = prompt ("Diga algo a vovó:");
        if(dialogo == dialogo.toLowerCase()){
          alert ("QUE?! FALA MAIS ALTO!");
          contador = 0;
            }else if (dialogo == "TCHAU"){
                                        contador++;
                                        alert('O QUE ? NÃO TO OUVINDOOO!')
                                        if (contador == 3){
                                          alert("VOLTE SEMPRE PARA CONVERSAR COMIGO")
                                          break;
                                        }
                                    }
        else {
          alert("NÃO, NÃO DESDE 1938!");
          contador = 0;
        }
}
}
