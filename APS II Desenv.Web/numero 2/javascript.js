'use strict'
var maior = null
var menor = null
function receber() {
    const n = (n) => Number(n)
    if ((maior == null) && (nota.value != 0)) {
        maior = n(nota.value)
        tabela.innerHTML += (`<tr><td> ${nome.value}</td> <td> <b>${n(nota.value)}</b></td></tr>`)
    } else if ((nota.value == 0) && (maior == null)) {
        menor = nota.value
        tabela.innerHTML += (`<tr><td> ${nome.value}</td> <td> <b>${n(nota.value)}</b></td></tr>`)
    } else if ((n(nota.value) > maior) && (menor == null)) {
        menor = maior
        maior = n(nota.value)
        tabela.innerHTML += (`<tr><td> ${nome.value}</td> <td> <b>${n(nota.value)}</b></td></tr>`)
    } else if (n(nota.value) > maior) {
        maior = n(nota.value)
        tabela.innerHTML += (`<tr><td> ${nome.value}</td> <td> <b>${n(nota.value)}</b></td></tr>`)
    } else if ((n(nota.value) < maior) && (menor == null)) {
        menor = n(nota.value)
        tabela.innerHTML += (`<tr><td> ${nome.value}</td> <td> <b>${n(nota.value)}</b></td></tr>`)
    } else if (n(nota.value) < menor) {
        menor = n(nota.value)
        tabela.innerHTML += (`<tr><td> ${nome.value}</td> <td> <b>${n(nota.value)}</b></td></tr>`)
    } else if ((n(nota.value) >= menor) && (n(nota.value) < maior)) {
        tabela.innerHTML += (`<tr><td> ${nome.value}</td> <td> <b>${n(nota.value)}</b></td></tr>`)
    } else if ((n(nota.value) == maior) || (n(nota.value) == menor)){
        tabela.innerHTML += (`<tr><td> ${nome.value}</td> <td> <b>${n(nota.value)}</b></td></tr>`)
    }
    pegar.innerHTML = (`Maior nota: ${maior}`)
    pegar2.innerHTML = (`Menor nota: ${menor}`)

}

