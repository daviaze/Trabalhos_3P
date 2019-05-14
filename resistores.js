function resistor(cor) {
     const array = ["Preto", "Marrom", "Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Violeta", "Cinza", "Branco"]
     let numero = ''
     for (let i = 0; i < cor.length;i++) numero = numero + String(array.indexOf(cor[i]))
     return (Number(numero))
 }
 console.log(resistor(["Preto", "Vermelho"]))