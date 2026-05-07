//8. Dado um array de números, encontre o maior valor usando while.

let array = [-7, 21, 0, -14, 35, -2, 9, -18, 4, 27, -31, 16, -6, 11, -23, 8, -1, 42, -10, 5]
let maiorElemento = array[0]
let posicaoDoArray = 0;
let tamanhoArray=array.length

while(posicaoDoArray<tamanhoArray){
    let elemento = array[posicaoDoArray]

    if(elemento>maiorElemento){
        maiorElemento=elemento
    }

    posicaoDoArray++
}

console.log("O maior número do array é o",maiorElemento)