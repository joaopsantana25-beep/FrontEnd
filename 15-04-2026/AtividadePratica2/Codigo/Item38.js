/*
38. Funções de Alta Ordem
Objetivo: Crie uma função de alta ordem que aceita outra função como
.parâmetro e a executa.
*/


function ElevarQuadrado(funcao,numero){
    return funcao(numero)
}

function Quadrado(n){
    return n*n
}

console.log(ElevarQuadrado(Quadrado,3))

