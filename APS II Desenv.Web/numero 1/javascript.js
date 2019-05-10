'use strict'
let i = 0
function receber (){
while(i < Number(numero.value)){
    postar.innerHTML += (`- ${2*i +2}<br>`)
    i++
}
postar2.innerHTML = (`Soma: ${i + i*Number(numero.value)}`)
}
