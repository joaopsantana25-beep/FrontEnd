/*
Menu de operações matemáticas
Crie um menu:
 1 = Somar
 2 = Subtrair
 3 = Multiplicar
 4 = Dividir
Leia dois números e a opção escolhida. Execute a operação com switch.
Conceito principal: switch case
*/

let num1 = 5
let num2 = 2
let operacao=4

switch (operacao){
    case 1:
        console.log(num1," + ",num2, " = ",num1+num2)
        break;
    
    case 2:
        console.log(num1," - ",num2, " = ",num1-num2)
        break;
    
    case 3:
        console.log(num1," * ",num2, " = ",num1*num2)
        break;
    
        
    case 4:
        if(num2==0){
            console.log("Valor inválido")
        }
        else{
        console.log(num1," / ",num2, " = ",num1/num2)
        }
        break;
    
    default:
        console.log("Operação Inválida")
        break;
}