/*
Crie uma função chamada operar que recebe dois números e uma função como parâmetro. 
Ela deve retornar o resultada da operação definida pela função recebida.
*/

function soma(num1,num2){
    return num1+num2
}

function multiplicar(num1,num2){
    return num1*num2
}

function operar(num1,num2,operacao){
    resultado = operacao(num1,num2)
    return resultado
}


console.log(operar(5,8,soma))
console.log(operar(5,9,multiplicar))