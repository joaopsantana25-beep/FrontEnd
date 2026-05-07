//10.Crie um programa que gere a sequência de Fibonacci até atingir um valor limite informado pelo usuário usando do...while.

let fimDaSequencia=12

let a = 0
let b = 1
let c = 0


do{
    console.log(a)

    c = a+b
    a=b
    b=c
    
}while(a<=fimDaSequencia)


