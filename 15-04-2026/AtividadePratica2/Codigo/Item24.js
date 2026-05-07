/*
24.Manipulação de Objetos com Métodos Nativos
Objetivo: Crie um objeto que contenha propriedades como nome, idade
e email, e utilize Object.keys() e Object.values() para listar as chaves e
valores desse objeto.
*/

let dados = {
    nome: "Romário",
    idade : 25,
    email: "Romário@gmail.com"
}

console.log(Object.keys(dados))
console.log(Object.values(dados))