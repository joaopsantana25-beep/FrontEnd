/*
6. Função: contarVogais
Objetivo : Contar o número de vogais presentes em uma frase. Conceitos :
• Utilizamos um loop para iterar sobre cada caractere da frase.
• A variável vogais armazena todas as vogais, incluindo acentuadas e com
til.
• O método includes() verifica se a letra atual é uma vogal.
• O contador é incrementado sempre que encontramos uma vogal.
*/

function contarVogais(frase){
  let numeroDeVogais=0
  
  //Lista com todas as vogais possíveis
    let vogais = [
  'a', 'e', 'i', 'o', 'u',
  'á', 'é', 'í', 'ó', 'ú',
  'â', 'ê', 'ô',
  'ã', 'õ',
  'à'
]

    //Laço for que pega todos os caracteres da frase
    for (let caractere of frase){
            if (vogais.includes(caractere)){
                numeroDeVogais++
            }
        }

    return ("Na frase existem "+numeroDeVogais+" vogais")
}


console.log(contarVogais("Bom dia"))