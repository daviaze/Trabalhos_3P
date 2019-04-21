'use strict'
let resp = prompt("Projeto(1) ou Auditoria(2) ?");
    if (resp == '1'){
let dias = prompt("Quantos dias de trabalho?");
let viagens = prompt("Quantas viagens ?");
    alert(`O valor total do serviço ficará em: ${(dias*200) + (viagens*1000)}`);
        } else if (resp == '2') {
  let dias = prompt("Quantos dias de trabalho?");
  let viagens = prompt("Quantas viagens ?");
        alert(`O valor total do serviço ficará em: ${(dias*100) + (viagens*1500)}`);
                } else {
                    alert('Não existe essa opção ! favor preencher novamente.');
                    }
