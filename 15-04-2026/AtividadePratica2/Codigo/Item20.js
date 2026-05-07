/*
20. Expressões Regulares em JavaScript
Objetivo: Crie uma função que utilize expressões regulares para validar
um número de telefone ou um endereço de e-mail inserido pelo usuário.
*/

function validarEmail(email) {
    let padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(email);
}

function validarTelefone(telefone) {
    let padrao = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    return padrao.test(telefone);
}

console.log(validarEmail("joao@gmail.com"))

console.log(validarTelefone("(11)98111-0000"))