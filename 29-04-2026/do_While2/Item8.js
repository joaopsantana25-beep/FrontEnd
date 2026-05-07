//8.Crie um programa que conte quantos números positivos foram digitados pelo usuário (pare quando digitar um número negativo).

let numerosDigitados = [8, 15, 3, 10, 6, 9, 2, 14, 7, 11, 5, 13, 18, 4, 12, 20, 16, 19, -7, 1]
let index = 0;
let contadorNumerosPositivos=0

do{
    if(index==numerosDigitados.length){
        console.log("Fim dos Números Digitados")
        break;
    }

    let numero = numerosDigitados[index]

    if(numero<0){
        console.log("Fim da Leitura")
        break;
    }

    if(numero==0){
        index++
        continue
    }

    contadorNumerosPositivos++
    index++
}while(true)

    console.log("Foram lidos",contadorNumerosPositivos,"numeros positivos")