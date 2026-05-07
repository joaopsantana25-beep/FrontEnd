/*
4- Função: ehPalindromo
Descrição : A função verifica se uma palavra é um palíndromo (uma
palavra que pode ser lida de trás para frente e de frente para trás,
mantendo o mesmo significado). Conceitos utilizados :
• String : Manipulação de strings para inverter a palavra.
• Looping : Para percorrer a palavra de trás para frente e construir a
palavra invertida. • Comparação : Verificação de igualdade entre a
palavra original e a invertida.
*/

function ehPalindromo(palavra){
    palavra = palavra.toLowerCase()
    let palavraInvertida = palavra.split("").reverse().join("")

    if (palavra==palavraInvertida){
        return ("É palindromo")
    }
    
    return "Não é palindromo"
}

console.log(ehPalindromo("Ovo"))
console.log(ehPalindromo("botijao"))