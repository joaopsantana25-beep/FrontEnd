//6. Peça um número e calcule o seu fatorial usando while.

let numero = 5
let fatorial = 1
let contador = 1;


while(contador<=numero){
    fatorial*=contador
    contador++
}

console.log(`${numero}! = ${fatorial}`)