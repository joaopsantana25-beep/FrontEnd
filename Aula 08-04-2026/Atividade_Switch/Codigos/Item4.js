/*
Classificação do mês
Leia um número de 1 a 12 e mostre o nome do mês.
Desafio extra: dizer também o trimestre:
 1º trimestre
 2º trimestre
 3º trimestre
 4º trimestre
Conceito principal: switch case
*/

let numero = 10;
let mes="inválido"
let trimestre="inválido";

switch (numero){
    case 1:
        mes = "Janeiro"
        trimestre = 1
        break;
    
    case 2:
        mes = "Fevereiro"
        trimestre = 1
        break;
    
    case 3:
        mes = "Março"
        trimestre = 1
        break;
    
        
    case 4:
        mes = "Abril"
        trimestre = 2
        break;
    
        
    case 5:
        mes = "Maio"
        trimestre = 2
        break;
    
    case 6:
        mes = "Junho"
        trimestre = 2
        break;
    
    
    case 7:
        mes = "Julho"
        trimestre = 3
        break;
    
    case 8:
        mes = "Agosto"
        trimestre = 3
        break;
    
    case 9:
        mes = "Setembro"
        trimestre = 3
        break;
    
        
    case 10:
        mes = "Outubro"
        trimestre = 4
        break;
    
        
    case 11:
        mes = "Novembro"
        trimestre = 4
        break;
    
    case 12:
        mes = "Dezembro"
        trimestre = 4
        break;
    
    default:
        console.log("Mês Inválido!")
        break;
}

console.log("O mês é",mes,"e o trimestre é",trimestre,"º ")