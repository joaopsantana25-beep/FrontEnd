//11. Conte quantas vogais existem em uma string usando while.

let frase = "O rato comeu queijo"
let vogaisPossiveis = ["a", "á", "à", "ã", "â","e", "é", "ê","i", "í","o","ó", "ô", "õ","u", "ú"]

let posicaoString = 0;
let posicaoVogal = 0;

let tamanhoString = frase.length
let tamanhoVogais = vogaisPossiveis.length;

let contadorVogais = 0;

while(posicaoString<tamanhoString){
    let letra = frase[posicaoString].toLowerCase()
    posicaoVogal=0

    while(posicaoVogal<vogaisPossiveis.length){
        vogalDoArray = vogaisPossiveis[posicaoVogal]
        
        if(letra ==vogalDoArray){
            contadorVogais++
            break;
        }

        
        posicaoVogal++
    }

    posicaoString++ 
}

console.log("A string possui",contadorVogais,"vogais")
