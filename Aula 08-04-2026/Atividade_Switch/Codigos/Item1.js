/*
Dia da semana com switch
Leia um número de 1 a 7 e mostre:
 1 = Domingo
 2 = Segunda
 ...
 7 = Sábado
Se o número for inválido, exiba uma mensagem padrão.
Conceito principal: switch case + default
*/

let dia = 7

switch (dia){
    case 1:
        console.log("Domingo")
        break;
    
    case 2:
        console.log("Segunda")
        break;
    
    case 3:
        console.log("Terça")
        break;
    
        
    case 4:
        console.log("Quarta")
        break;
    
        
    case 5:
        console.log("Quinta")
        break;
    
    case 6:
        console.log("Sexta")
        break;
    
    
    case 7:
        console.log("Sábado")
        break;
    
    default:
        console.log("Dia inválido!")
        break;
}