/*
35.Método replace() para Substituir Texto
Objetivo: Crie uma função que substitua todas as ocorrências de uma
palavra em uma string usando replace().
*/

let texto = "Hoje comi maçã"

function subtituir(texto){
    return texto.replace("maçã","pera")
}

console.log(subtituir(texto))