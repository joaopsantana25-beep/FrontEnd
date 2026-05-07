//7. Crie um programa que conte quantos números positivos existem em um array usando while.

let array = [12, -5, 33, -17, 0, 8, -22, 45, -3, 19, -11, 27, -30, 6, -9, 14, -1, 38, -25, 2]

let numerosPositivos = 0;
let tamanhoArray = array.length;
let posicaoDoArray = 0;

while(posicaoDoArray<tamanhoArray){
    let elemento = array[posicaoDoArray]

    if(elemento>0){
        numerosPositivos++;
    }
    posicaoDoArray++
}

console.log("Existem",numerosPositivos,"numeros positivos no array")