/*
3- Função: controleDespesas
Descrição: A função recebe um array de despesas e retorna um novo array classificando cada
despesa como &quot;Alto Gasto&quot; se for maior que 100, ou &quot;Gasto Controlado&quot; se for menor ou igual
a 100. Conceitos utilizados
• Array ([]): A estrutura de dados utilizada para armazenar as despesas e o resultado da
classificação.
• Laço de repetição (for... of): Percorre os elementos do array de despesas.
• Condicional (if / else): Verifica se a despesa é maior que 100 para classificá -la corretamente.
• Método push (): Adiciona elementos ao array de resultado.
*/

function controleDespesas(listaDespesas){
    let avaliacaoDespesas=[]

    for(despesa of listaDespesas){
        if(despesa>100){
            avaliacaoDespesas.push("Alto Gasto")
        }
        else if(despesa<=100){
            avaliacaoDespesas.push("Gasto Controlado")
        }
        else{
            avaliacaoDespesas.push("Valor inválido")
        }
    }

    return avaliacaoDespesas
}

let array = [450,300,200,100,50,30,10,40,30,"oi"]

console.log(controleDespesas(array))