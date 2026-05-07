/*
33.Método parseFloat() e parseInt()
Objetivo: Crie uma função que converta uma string representando um
número em ponto flutuante e outra que converta para inteiro usando
parseFloat() e parseInt().
*/

let numero = "5.3"

function numeroReal(numero){
    numero = parseFloat(numero)
    console.log(numero)
}

function numeroInteiro(numero){
    numero = parseInt(numero)
    console.log(numero)
}

numeroReal(numero)
numeroInteiro(numero)