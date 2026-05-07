/*
30. Estrutura Condicional Switch
Objetivo: Crie uma estrutura switch para verificar o dia da semana e
exibir o nome do dia (ex: "Segunda-feira").
*/

let dia = 4

switch(dia){
    case 1:
        console.log("Domingo")
        break
    
    case 2:
        console.log("Segunda")
        break

    case 3:
        console.log("Terça")
        break

    case 4:
        console.log("Quarta")
        break

    case 5:
        console.log("Quinta")
        break

    case 6:
        console.log("Sexta")
        break
    
    case 7:
        console.log("Sábado")
        break

    default:
        console.log("Dia Inválido")
        
}