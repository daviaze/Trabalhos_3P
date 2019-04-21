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
              alert("VOLTE SEMPRE PARA FALAR COMIGO QUERIDO!")
                                      break;
                                    }
        else {
          alert("NÃO, NÃO DESDE 1938!");
          contador = 0;
        }
}
}
