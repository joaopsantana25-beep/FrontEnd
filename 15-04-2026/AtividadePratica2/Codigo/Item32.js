/*
32. Método toFixed()
Objetivo: Crie um programa que calcule o preço de um produto com 3
casas decimais utilizando o método toFixed().
*/

let precoBase = 5
let imposto = 0.4563

console.log("O preço do produto depois do imposto é: R$",(precoBase*(1+imposto)).toFixed(3))

