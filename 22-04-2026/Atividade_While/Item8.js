/*
8. Dado um array de números, encontre o maior valor usando while
*/

let array = [450,-530,-630,484,8921,59320,-6317,50,0]

let i =0
let maior = array[0];

while(i<array.length){
    if(array[i]>maior){
        maior=array[i]
    }
    i++
}

console.log("O maior valor dentro do array é:",maior)

