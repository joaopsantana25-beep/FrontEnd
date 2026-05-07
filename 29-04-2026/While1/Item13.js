//13. Calcule a média de um conjunto de números inseridos pelo usuário até que ele digite um valor negativo.

let numerosDigitados = [12, 5, 18, 7, 3, 9, 14, 21, 6, 11, 8, 10, 15, -4, 2, 19, 13, 16, 20]
let posicaoNumerosDigitados = 0
let media = 0
let contador = 0
let soma=0

while(true){
    
    if(posicaoNumerosDigitados==numerosDigitados.length){
        console.log ("Fim dos inputs do usuario")
        break;
    }
    
    let numero = numerosDigitados[posicaoNumerosDigitados]

    if(numero<0){
        console.log("Fim da Entrada")
        break
    }

    soma+=numero
    contador++
    posicaoNumerosDigitados++

}

if(contador==0){
    console.log("Nenhum número foi computado")
}
else{
    media = soma/contador
    console.log("A média dos números digitados é:",media.toFixed(2))
}
