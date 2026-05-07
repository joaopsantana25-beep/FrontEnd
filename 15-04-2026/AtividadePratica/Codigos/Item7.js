/*
7. Soma de valores em array
Dado o array:
[10, 20, 30, 40]
Crie um programa que utilize um laço for para calcular e exibir o total
desses valores.
*/

let array = [10,20,30,40]

let soma = 0;

for (let i=0;i<array.length;i++){
    soma+=array[i]
}

console.log("A soma dos números do array é: "+soma)