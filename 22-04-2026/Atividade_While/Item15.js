/*
15.Crie um programa que gere a sequência de Fibonacci até um 
determinado número informado pelo usuário usando while.
*/

const readline = require('readline');

// Cria interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário
rl.question('Digite até que numero você deseja ver a sequencia de fibo: ', (numero) => {
  numero = parseInt(numero);

let a = 1
let b = 0
let c = 1
let i = 1

while(i<=numero){
    console.log(b)

    c=b
    b=b+a
    a=c
    

    i++
}

rl.close()

})