/*
Sistema de aprovação com recuperação
Leia a nota de um aluno:
 7 a 10: Aprovado
 5 a 6.9: Recuperação
 abaixo de 5: Reprovado
*/

let nota = 8

switch(true){
    case (nota>=0 && nota<5):
        console.log("Reprovado")
        break;

    case (nota<7):
        console.log("Recuperação")
        break;
    
    case(nota<=10):
        console.log("Aprovado")
        break;
    
    default:
        console.log("Nota Inválida")
        break;
    }