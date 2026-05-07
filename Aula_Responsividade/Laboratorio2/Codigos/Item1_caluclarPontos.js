/*
1- Função: calcularPontos
Objetivo : Calcular a quantidade total de pontos de um time, sabendo
que uma vitória vale 3 pontos e um empate vale 1 ponto . Conceitos :
• A função recebe dois parâmetros: o número de vitórias e empates.
• Multiplicamos o número de vitórias por 3 (já que cada vitória vale
3 pontos).
• Somamos os empates (já que cada empate vale 1 ponto).
*/

function calcularPontos(numeroVitorias,numeroEmpates){
    return (numeroVitorias*3 + numeroEmpates*1)
}

console.log(calcularPontos(5,3))