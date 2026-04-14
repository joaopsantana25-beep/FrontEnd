/*
Crie uma função cumprimentar que recebe dois parâmetros: saudação e nome. Se o nome não for passado,
o valor padrão deve ser 'visitante'. Terone a saudação completa
*/

function cumprimentar(saudacao,nome="visitante"){
    frase = (saudacao +" "+ nome)
    return frase
}

//Versão com dois argumento
console.log(cumprimentar("Olá","João"))

//Versão com 1 argumento
console.log(cumprimentar("Olá"))
