/*
4. Função: calcularRendimento
Descrição: A função calcula o rendimento obtido a partir de um valor
investido e uma taxa de juros anual. Conceitos utilizados:
• Função: Encapsula a lógica de cálculo.
• Parâmetros: Recebe o valor investido e a taxa de juros como argumentos.
• Cálculo percentual: A fórmula valor * (taxa / 100 ) é usada para calcular a
porcentagem.
• Retorno: O valor calculado do rendimento é retornado.
*/

function calcularRendimento(valorInvestido,taxa){
    if(valorInvestido<0){
        return "Valor inválido"
    }

    if(taxa<0){
        return "Taxa inválida"
    }

    return ("R$ "+(valorInvestido*(taxa/100)).toFixed(2))
}

console.log(calcularRendimento(1000,10))