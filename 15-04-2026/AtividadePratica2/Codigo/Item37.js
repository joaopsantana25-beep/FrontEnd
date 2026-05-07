/*
37. Manipulação de Objetos com Object.assign()
Objetivo: Crie dois objetos e utilize o método Object.assign() para
mesclar suas propriedades em um novo objeto.
*/

let banana = {
    gosto: "O melhor",
    cor: "Amarelo"
}

let abacate = {
    nome: "Abacate",
    preco: 5.30
}

let frutas = Object.assign({}, banana, abacate)

console.log(frutas)