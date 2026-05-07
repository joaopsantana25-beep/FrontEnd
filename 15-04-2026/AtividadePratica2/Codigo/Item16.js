/*
16. Manipulação de Funções com Argumentos Dinâmicos
Objetivo: Crie uma função que aceite um número variável de
argumentos e calcule a média dos valores passados.
*/

function media(...numeros) {
    let soma = 0;

    for (let num of numeros) {
        soma += num;
    }

    return soma / numeros.length;
}

console.log(media(10, 20, 30)); // 20
console.log(media(5, 15));      // 10