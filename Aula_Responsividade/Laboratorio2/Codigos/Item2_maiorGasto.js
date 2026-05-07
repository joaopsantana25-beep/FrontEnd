/*
2- Função: maiorGasto
Descrição : A função encontra o maior valor de gasto em um array e
conta quantas vezes esse maior gasto se repete. Conceitos utilizados :
• Looping : Para percorrer o array e encontrar o maior valor.
• Condicional : Para atualizar o maior valor encontrado e contar as
repetições desse valor.
• Variáveis de controle : Para armazenar o maior valor e o contador
das repetições.
*/


function maiorGasto(listaDeValores){
    let numeroDeRepeticoesMaiorValor=0
    let maiorValor = Math.max(...listaDeValores)

    for (valor of listaDeValores){
        if(valor == maiorValor){
            numeroDeRepeticoesMaiorValor++
        }
    }

    return("O maior valor é o "+maiorValor+" e ele se repete "+numeroDeRepeticoesMaiorValor+" vezes")

}


let array = [50,30,40,50,22,30,5,4,3,2,1,50,50]

console.log(maiorGasto(array))