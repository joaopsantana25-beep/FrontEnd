/*
2. Função: ordenarNomes
Descrição: A função recebe um array de nomes e retorna o array ordenado
em ordem alfabética. Conceitos utilizados:
• Função: Criada para encapsular a lógica de ordenação.
• Array: Uma estrutura de dados que armazena múltiplos valores.
• Método sort: É usado para ordenar os elementos de um array em ordem
crescente. Por padrão, sort organiza os valores em ordem alfabética para
strings.
• Retorno: O array ordenado é retornado diretamente.
*/

function ordenarNomes(lista){
    return lista.sort()
}

let array = ["Pedro","Romário","Anna","Ana","Elisa"]

console.log(ordenarNomes(array))