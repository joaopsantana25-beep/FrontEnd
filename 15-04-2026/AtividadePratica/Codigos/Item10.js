/*
10. Cálculo de comissão
Dado o array:
[100, 200, 150]
Crie um programa que calcule o valor total de comissão, considerando 10%
sobre cada venda, utilizando um laço for.
*/

let array = [100,200,150]

let comissao=0

for (let i = 0;i<array.length;i++){
    comissao+=array[i]*0.1
}

console.log("A comissão é de: R$ "+comissao.toFixed(2)+" reais")