'use strict'
      function receber() {
        
      let elefante = 1
      while(elefante <= 20){
        if(elefante == 1){
            document.write('1 elefante incomoda muita gente...<br>');
        }
            else if(elefante % 2 == 0){
                document.write(elefante +' elefantes');
      for(var vezes = 0;vezes < elefante; vezes++){
            document.write('<b> incomodam</b>');
          }
            document.write(' muito mais...<br>');
        }
              else{
                  document.write(elefante + ' elefantes incomodam muita gente...<br>')
        }
        elefante++;
      }
}
