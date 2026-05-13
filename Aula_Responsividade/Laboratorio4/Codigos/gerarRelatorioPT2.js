/*
Função: gerarRelatorio (Parte 2)
Descrição: A segunda parte da função gerar Relatório expande a análise
financeira, incluindo:
• Cálculo do orçamento → Verifica se houve economia ou excedente.
• Meta de investimento → Confere se o saldo final atingiu a meta
estabelecida.
• Resumo detalhado das despesas → Exibe os gastos por categoria.

Passo a passo da execução:
1️⃣ calcula a economia ou excesso de gastos → meta Orçamento – total
Despesas
• Se for positivo, exibe uma mensagem de economia.
• Se for negativo, informa o excedente.
2️⃣ verifica a meta de investimento → Compara saldo Investimento com
meta Investimento.
• Se o saldo for maior ou igual, a meta foi atingida.
• Caso contrário, informa que a meta não foi alcançada.
3️⃣ Lista as despesas por categoria → Itera sobre o objeto despesas e
formata os valores.
*/

//Funçoes de outros codigos
function gerenciarDespesas(listaDespesas){
    let totalDespesas=0;
    let listaOrganizadaDespesas=[]

    for(const chave in listaDespesas){
        let totalPorCategoria=0;

        for(let valor of listaDespesas[chave]){
            totalPorCategoria+=valor;
        }

        totalDespesas+=totalPorCategoria

        listaOrganizadaDespesas.push({
            categoria: chave,
            valor: totalPorCategoria
        })

    }

    return [listaOrganizadaDespesas,totalDespesas.toFixed(2)]
}

function simularInvestimento(valorInicial,taxaMensal,tempo){
    let valorFinal=valorInicial;

    for(let i =0;i<tempo;i++){
        valorFinal*=(1+taxaMensal/100);        
    }


    return valorFinal.toFixed(2)
}

function obterMesAtual(){
    let meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]

    const now = new Date()
    let indexMesAtual=now.getMonth()
    let mesAtual = meses[indexMesAtual]

    return console.log("O mês atual é",mesAtual)
}

//Código Atual


function gerarRelatorio(dadosInvestimento,dadosDespesa,orcamento,metaInvestimento){
    let mensagemGastos=""
    let mensagemInvestimeto=""

    let despesas = gerenciarDespesas(dadosDespesa)
    
    let saldoFinal = simularInvestimento(dadosInvestimento[0],dadosInvestimento[1],dadosInvestimento[2])

    let totalGasto=despesas[1]

    //Calcular a economia ou excesso de gastos

    if(orcamento>=totalGasto){
        mensagemGastos = ("Houve economia quanto aos gastos. R$"+(orcamento-totalGasto).toFixed(2))
    }
    else{
        mensagemGastos = ("Houve um excesso dos gastos de R$"+(-1*(orcamento-totalGasto)).toFixed(2))
    }

    if(saldoFinal>=metaInvestimento){
        mensagemInvestimeto = "A meta de investimento foi atingida"
    }
    else{
        mensagemInvestimeto = "A meta de investimento não foi atingida"
    }

   

    console.log("\n--------------Relatório--------------\n")

    //Logs quanto a economia
    console.log("\n$ Informações Sobre Investimento\n")
    console.log("O retorno do investimento foi R$"+saldoFinal)
    console.log(mensagemInvestimeto)

    //Logs quanto ao gasto
    console.log("\n$ Informações Sobre Economia\n")
    console.log("O total gasto foi R$"+totalGasto)
    console.log(mensagemGastos)

    //Logs das categorias
    console.log("\nLista de Gastos Ordenadas\n")
    console.log(despesas[0])

    //Log mês Atual
    console.log("\nMês Atual\n")
    obterMesAtual();
}


let dadosInvestimento=[1000,5,5]

let dadosDespesa = {
    "alimentação":[20,25,30,45],
    "transporte":[10,15,20,36],
    "aluguel":[1000,1000,2000],
    "lazer":[200,300,200,200]
}

gerarRelatorio(dadosInvestimento,dadosDespesa,3000,1500)




