/*
3- Função: calcularMedia
Descrição : A função calcula a média dos números em um array.
Conceitos utilizados :
• Looping : Para somar todos os valores do array .
• Operações matemáticas : Para calcular a soma e dividir pela
quantidade de elementos para obter a média.
*/

function calcularMedia(listaNotas){
    let soma = 0
    let numeroDeNotas = listaNotas.length

    for (let nota of listaNotas){
        soma+=nota;
    }

    let media = soma/numeroDeNotas

    return ("A média das notas é "+media.toFixed(2))
}

let notas = [5,6,7,8,5,3,2,4,5,10]

console.log(calcularMedia(notas))