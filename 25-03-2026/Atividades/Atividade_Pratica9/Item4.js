/*
4. Crie uma função que conte quantas letras tem uma palavra.
*/

function contar_letras(palavra){
    let numero_letras = palavra.length;
    let mensagem = ("A palavra tem "+numero_letras+" letras")
    return mensagem
}

let palavra = "Mamão"

console.log(contar_letras(palavra))