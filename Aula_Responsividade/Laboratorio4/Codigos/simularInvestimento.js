/*
1. Função: simularInvestimento
Descrição: A função simularInvestimento calcula o saldo final de um
investimento com base em um valor inicial, uma taxa mensal de
rendimento e um período determinado em meses. O cálculo é baseado no
rendimento composto, onde o saldo acumulado é atualizado a cada mês.
Conceitos utilizados:
• Laço de repetição (for): Utilizado para iterar ao longo do período de
meses e calcular o rendimento acumulado.

• Cálculo de juros compostos: A cada iteração, o saldo recebe um
acréscimo proporcional à taxa mensal.
• Operação matemática com porcentagem: A taxa de rendimento é aplicada
dividindo o valor por 100.
• Formatação de números (toFixed (2)): Para garantir que o resultado tenha
duas casas decimais.
Passo a passo da execução:
1️⃣ Definição do saldo inicial → O valor do investimento começa com
valorInicial.
2️⃣ Iteração com for → Para cada mês, o saldo é atualizado aplicando a
taxa de rendimento.
3️⃣ Cálculo dos juros compostos → O saldo é multiplicado pela taxa e
somado ao próprio saldo.
4️⃣ Retorno do valor formatado → O resultado é ajustado para exibição
com duas casas decimais. Essa função permite simular diferentes cenários
financeiros e pode ser utilizada para análises de investimentos.
*/

export function simularInvestimento(valorInicial,taxaMensal,tempo){
    let valorFinal=valorInicial;

    for(let i =0;i<tempo;i++){
        valorFinal*=(1+taxaMensal/100);        
    }


    return console.log("O valor do investimento ao final do tempo é R$ "+valorFinal.toFixed(2))
}


//console.log(simularInvestimento(1000,5,5))

