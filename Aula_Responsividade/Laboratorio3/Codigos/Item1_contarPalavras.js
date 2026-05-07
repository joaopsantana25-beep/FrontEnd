/*
1 -Função: contarPalavras
Descrição: A função conta a quantidade de palavras em uma frase. Conceitos utilizados :
• String: Manipulação de strings para dividir a frase em palavras.
• Método split(): Para dividir a frase com base nos espaços em branco.
• Looping: Para contar o número de palavras, ignorando as vazias.
*/

function contarPalavras(frase){
    let palavras = frase.split(" ")
    let numeroDePalavras = palavras.length

    return "A frase tem "+numeroDePalavras+" palavras"
}


console.log(contarPalavras("Bom dia, São Paulo"))