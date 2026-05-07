/*
8. Média de notas
Dado o array:
[7, 8, 6, 9]
Crie um programa que calcule e exiba a média das notas utilizando um laço
for.
*/

let array = [7,8,6,9]
soma = 0;
tamanho = array.length
let media = 0;

for(let i =0;i<tamanho;i++){
    soma+=array[i]
}

media = soma/tamanho
console.log("A média das notas é: "+media)