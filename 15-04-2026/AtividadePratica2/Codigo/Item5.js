/*
5.Arrays e Laços de Repetição
Objetivo: Crie um array de 5 números e utilize um laço for para
calcular a soma de todos os elementos.
*/

let array = [1,2,3,4,5]
let soma=0

for( let i = 0;i<array.length;i++){
    soma+=array[i]
}

console.log(soma)