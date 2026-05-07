/*
18.Operadores de Comparação para Ordenação
Objetivo: Crie um array de objetos representando pessoas, cada um
com a propriedade idade. Ordene o array em ordem crescente de idade
usando sort().
*/

let array = [
    
    { nome: "João" , idade: 25},
    {nome: "Pedro" , idade: 45},
    {nome: "Jose" , idade: 13}
]

array.sort((a,b) => a.idade - b.idade)
console.log(array)