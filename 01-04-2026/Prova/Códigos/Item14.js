/*
Crie uma variável x no escopo global e dentro de uma função crie uma variável x local. Modifique o valor da
variável x dentro da função e mostre os valores x global e local
*/


let x = 20

function mostrarLocal(numero){
    let x = numero
    return x 
}


console.log(mostrarLocal(80))
console.log(x)