'use strict'
let palavras = []
let resp = undefined
while (resp != ""){
    let resp = prompt("Digite uma palavra:")
    palavras.push(resp)
    if (resp == "" && resp != null){
        alert(`Palavras em ordem: ${palavras.sort()}`)
        break;
    }else if (resp == null){
        break;
    }
}
