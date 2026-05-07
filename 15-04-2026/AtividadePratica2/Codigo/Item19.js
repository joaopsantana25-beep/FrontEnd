/*
19.Função Recursiva
Objetivo: Crie uma função recursiva que calcule o fatorial de um
número.
*/

function fatorial(n) {
    if (n === 1 || n ==0) {
        return 1;
    }

    if(n<0){
        return "Valor Inválido!"
    }

    return n * fatorial(n - 1);
}

console.log(fatorial(-5));