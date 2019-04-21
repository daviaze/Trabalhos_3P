'use strict'

  function capturar() {
  let capturando=document.getElementById('valor').value;
let elefante = 1
let vezes = 0
        while(elefante <= capturando){
          if(elefante == 1){
              document.write('1 elefante incomoda muita gente...<br>');
          }
              else if(elefante % 2 == 0){
                  document.write(elefante +'elefantes');
        for(vezes = 0;vezes < elefante; vezes++){
              document.write('<b> incomodam</b>');
            }
              document.write(' muito mais<br>');
          }
                else{
                    document.write(elefante + 'elefantes incomodam muita gente...<br>')
          }
          elefante++;
        }
}
