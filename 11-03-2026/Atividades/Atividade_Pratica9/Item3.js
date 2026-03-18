/*
3. Crie uma função que receba uma string e retorne ela em
maiúsculo.
*/

function uper(texto){
    let mensagem_maiuscula = texto.toUpperCase();
    return mensagem_maiuscula;
}

let mensagem = "Esse não é um texto em maiúsculo"

console.log(uper(mensagem))