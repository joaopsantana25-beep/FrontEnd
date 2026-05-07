/*
5.Crie um programa que mostre a tabuada de um número informado usando 
while.
*/

// Importa o módulo readline para entrada de dados
const readline = require('readline');

// Cria interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário
rl.question('Digite um número para ver a tabuada: ', (numero) => {
  numero = parseInt(numero);


let i = 1

console.log(`Tabuada do ${numero}: `);

while(i<=10){
    console.log(`${numero} * ${i} = ${numero*i}`)
    i++
}

rl.close()

})