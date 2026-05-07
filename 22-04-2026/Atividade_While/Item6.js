/*
6. Peça um número e calcule o seu fatorial usando while
*/

/*
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
*/

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um número para fazer o fatorial dele: ", (numero) => { 
    numero = parseInt(numero)


let i = numero
let fatorial = 1

while(i>1){
    fatorial *=i
    i--
}

console.log("O valor do fatorial do número é:",fatorial)

})

