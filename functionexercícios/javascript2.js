function soma (array){
    let somar = 0
    array.forEach(numero => {
                somar = somar + numero
    });
    return somar
}
console.log(soma([5,5,4]))