/*
3. Construa uma função chamada verificarPar que recebe um
número como argumento e retorna "Par" se o número for par e
"Ímpar" se o número for ímpar.
*/

function verificarPar(numero){
    //Váriavel para armazenar o resto da divida do número por 2
    resto = numero%2

    return (resto && "Ímpar" || "Par")
}

console.log(verificarPar(7))