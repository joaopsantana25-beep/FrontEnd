/*
27.Escopo de Variáveis
Objetivo: Crie duas variáveis, uma dentro de uma função e outra fora
dela. Acesse ambas e observe o comportamento de escopo.
*/

let nome = "Emilia"

function show(){
    let nome = "Carlos"
    console.log(nome)
}

show()
console.log(nome)