/*
7. Crie um programa que conte quantos números positivos existem em um 
array usando while
*/

let array = [450,-530,-630,484,8921,59320,-6317,50,0]

let i =0
let contador = 0;

while(i<array.length){
    if(array[i]>0){
        contador++
    }
    i++
}

console.log("No array a quantidade de números positivos são:",contador)

