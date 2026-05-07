/*
2- Função: calcularDistancia
Descrição: A função compara duas distâncias e retorna qual pessoa está mais próxima. Se a
primeira distância for menor, retorna &quot;Pessoa 1&quot;, se a segunda for menor, retorna &quot;Pessoa 2&quot;,
e se ambas forem iguais, retorna &quot;Ambos estão a mesma distância&quot;. Conceitos utilizados
• Condicional (if / else if / else): Utilizado para verificar qual das distâncias é menor e retornar
a resposta adequada.
• Comparação (, ===): Verifica a relação entre os valores das distâncias.
• Retorno ( return ): Garante que a função
*/

function calcularDistancia(distancia1,distancia2){
    if(distancia1<distancia2){
        return "Pessoa 1"
    }
    else if(distancia2<distancia1){
        return "Pessoa 2"
    }
    
    return "Ambos estão a mesma distância"
}


console.log(calcularDistancia(5,3))

console.log(calcularDistancia(2,3))

console.log(calcularDistancia(5,5))