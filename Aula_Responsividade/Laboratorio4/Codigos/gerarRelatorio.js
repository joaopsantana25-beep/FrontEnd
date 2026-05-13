/*
Função: gerarRelatorio (parte 1)
Descrição: A função gerar Relatório gera um relatório financeiro com
informações sobre o investimento, despesas e o mês atual. Conceitos
utilizados:
• Reutilização de funções: Chama outras funções já criadas (simular
Investimento, gerenciar Despesas e obter Mês Atual).
• Interpolação de strings: Usa template literals (` `) para exibir valores no
console.
• Organização do código: Estrutura clara e modularizada.
Passo a passo da execução:
1️⃣ calcula o saldo do investimento → Usa simular Investimento para obter
o valor final do investimento.
2️⃣ calcula o total das despesas → Usa gerenciar Despesas para somar
todos os gastos.
3️⃣ obtém o mês atual → Usa obter Mês Atual para exibir o nome correto.
4️⃣ exibe os dados no console → Utiliza console.log para formatar o
relatório. Essa primeira parte do relatório estabelece a base para exibir as
informações financeiras essenciais. A próxima etapa incluir á a comparação
com metas e uma análise mais detalhada!
*/


import { obterMesAtual } from './obterMesAtual.js'; 
import { gerenciarDespesas } from './gerenciarDespesas.js';
import { simularInvestimento } from './simularInvestimento.js';


function gerarRelatorio(dadosInvestimento,dadosDespesa){
    console.log("\n--------------Relatório--------------\n")
    
    simularInvestimento(dadosInvestimento[0],dadosInvestimento[1],dadosInvestimento[2])
    console.log("A despesa total é: R$",gerenciarDespesas(dadosDespesa))
    obterMesAtual();
}


let dadosInvestimento=[1000,5,5]

let dadosDespesa = {
    "alimentação":[20,25,30,45],
    "transporte":[10,15,20,36],
    "aluguel":[1000,1000,2000],
    "lazer":[200,300,200,200]
}

gerarRelatorio(dadosInvestimento,dadosDespesa)