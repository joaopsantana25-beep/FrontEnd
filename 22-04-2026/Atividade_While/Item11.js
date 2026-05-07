/*
11. Conte quantas vogais existem em uma string usando while.
*/

let string = "O gato comeu o peixe"

let i =0
let contador = 0

while(i<string.length){
    let letra = string[i].toLowerCase()

    if (letra=="a" || letra == "e" || letra == "i" || letra =="o" || letra == "u"){
        contador++
    }
    i++
}

console.log("O número de vogais da string é:",contador)