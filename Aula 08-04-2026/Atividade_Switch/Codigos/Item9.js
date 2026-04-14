/*
Mini sistema de atendimento
Crie um menu principal:
 1 = Ver saldo
 2 = Fazer depósito
 3 = Fazer saque
 4 = Sair
Depois:
 use switch para o menu
 use if/else para validar saque (ex.: não permitir sacar valor maior que
o saldo)
*/

console.log("----------------------")
console.log("Seja bem vindo\n")
console.log("1 - Ver saldo")
console.log("2 - Fazer depósito")
console.log("3 - Fazer Saque")
console.log("4 - Sair")
console.log("----------------------")

let saldo = 50
let deposito = 40
let saque = 30
let opcao =  3

switch (opcao) {
    case 1:
        console.log("Seu saldo é: R$",saldo);        
        break;

    case 2:
        saldo+=deposito
        console.log("O valor do depósito é: R$",deposito)
        console.log("Seu saldo é: R$",saldo);        
        break;

    case 3:
        if(saque<=saldo){
            saldo-=saque
            console.log("O valor sacado é: R$",saque)
            console.log("Seu saldo é: R$",saldo); 
        }       
        else{
            console.log("Valor inválido, pois excede o saldo de sua conta")
        }
        break;
        
    case 4:
        console.log("Saindo do Programa!")
        break;

    default:
        console.log("Opção Inválida")
        break;
}


