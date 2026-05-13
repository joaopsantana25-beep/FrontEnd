/*
3. Função: obterMesAtual
Descrição: A função obterMesAtual retorna o nome do mês atual baseado
na data do sistema. Conceitos utilizados:
• Objeto Date: Permite trabalhar com datas e horários no JavaScript.
• Método. getMonth (): Retorna o número do mês (de 0 a 11).
• Arrays: Utilizado para armazenar os nomes dos meses.
• Acesso a elementos do array: O índice do mês retornado pelo. getMonth
() é usado para buscar o nome correto.
 */

export function obterMesAtual(){
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
//obterMesAtual()