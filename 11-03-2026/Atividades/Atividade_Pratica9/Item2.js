/*
2. Crie uma função que receba um número e verifique se ele é
par
*/

function par_impar(numero){
    if (numero%2==0){
        return "O número é par"
    }
    else{
        return "O número é ímpar"
    }
}

let numero = 6

console.log(par_impar(numero))