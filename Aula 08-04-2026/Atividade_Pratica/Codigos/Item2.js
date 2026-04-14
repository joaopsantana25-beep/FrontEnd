/*
Descobrir se um número é par ou ímpar
Leia um número inteiro e mostre:
 “Par”
 “Ímpar”
Desafio extra: dizer também se o número é positivo ou negativo
*/

let numero = 15;
let sinal;

if (numero>0){
    sinal = "positivo";
}
else if  (numero<0){
    sinal = "negativo";
}
else{
    sinal = "nulo";
}

if (numero%2==0){
    console.log("O número é par e "+sinal);
}
else{
    console.log("O número é ímpar e "+sinal);
}