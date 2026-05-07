//15.Crie um programa que gere a sequência de Fibonacci até um determinado número informado pelo usuário usando while.

let termoDaSequencia=8
let contador = 0

let a = 0
let b = 1
let c = 0


while(contador<termoDaSequencia){
    console.log(a)

    c = b+a
    a=b
    b=c   

    contador++
}

