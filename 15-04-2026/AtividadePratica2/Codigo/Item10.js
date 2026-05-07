/*
10.Manipulação de Dados de Referência (Objetos e Arrays)
Objetivo: Crie uma função que modifique um objeto e um array, e
depois mostre como os dados podem ser alterados quando referências
são compartilhadas.
*/

function modificarDados(pessoa, numeros) {
    pessoa.nome = "Carlos";
    numeros.unshift(4);

    console.log(pessoa);
    console.log(numeros);
}

let pessoa = { nome: "Ana", idade: 20 };
let numeros = [1, 2, 3];

console.log("Antes da função:");
console.log(pessoa);
console.log(numeros);

modificarDados(pessoa, numeros);

console.log("Depois da função:");
console.log(pessoa);
console.log(numeros);