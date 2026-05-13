/*
2. Função: gerenciarDespesas
Descrição: A função gerenciarDespesas recebe um objeto contendo
despesas categorizadas e calcula o total gasto somando os valores de cada
categoria. Conceitos utilizados:
• Objetos (Objeto): Utilizados para armazenar as despesas em diferentes
categorias.
• Laço for...in: Itera sobre as propriedades do objeto, acessando cada
categoria.
• Acesso dinâmico às propriedades do objeto: Utilizando
despesas[categoria] para obter os valores.
• Acumulação de valores: A cada iteração, os valores das despesas são
somados para obter o total.

Passo a passo da execução:
1️⃣ Criação do objeto despesas → Contém categorias como alimentação,
transporte, aluguel e lazer.
2️⃣ Inicialização do total → Define totalDespesas = 0 para armazenar a
soma.
3️⃣ Iteração com for...in → Percorre todas as categorias do objeto e soma
os valores.
4️⃣ Retorno do total → A função retorna a soma total das despesas.


 */

export function gerenciarDespesas(listaDespesas){
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

    //return console.log("A lista ordenada das despesas por categoria é: ",listaOrganizadaDespesas,
      //  "\nO custo total das despesas é: R$ ",totalDespesas.toFixed(2))

    return totalDespesas.toFixed(2);
}
/*
let lista = {
    "alimentação":[20,25,30,45],
    "transporte":[10,15,20,36],
    "aluguel":[1000,1000,2000],
    "lazer":[200,300,200,200]
}

gerenciarDespesas(lista)*/