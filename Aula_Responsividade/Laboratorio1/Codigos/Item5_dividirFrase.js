/*
5. Função: dividirFrase
Objetivo : Separar uma frase em palavras, usando espaços como
delimitadores, e retornar essas palavras em um array . Conceitos :
• A função split() divide uma string em um array , de acordo com o
delimitador especificado (neste caso, o espaço &quot; &quot;).
• O return retorna o array resultante.
*/

function dividirFrase(frase){
    return frase.split(" ")
}

let frase = "Hoje tem gol do Gabigol"

console.log(dividirFrase(frase))