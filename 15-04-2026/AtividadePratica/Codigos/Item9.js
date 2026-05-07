/*
9. Maior valor do array
Dado o array:
[5, 12, 8, 20, 3]
Crie um programa que utilize um laço for para encontrar e exibir o maior
número do array.
*/

let array = [5,12,8,20,3]

let maior = array[0]

for (let i = 0;i<array.length;i++){
    if(array[i]>=maior){
        maior = array[i]
    }
}

console.log("O maior número do array é:",maior)