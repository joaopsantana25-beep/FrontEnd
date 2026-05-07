//14. Simule um caixa eletrônico: peça valores de saque até que o saldo fique zerado, usando while.

let saques = [4, 18, 27, 3, 11, 45, 9, 22, 6, 31, 14, 8, 19, 2, 37, 10, 25, 16, 5, 13]
let posicaoSaque=0
let saldo = 199

while(true){
    
    if(posicaoSaque===saques.length){
        console.log("Fim dos Valores Sacados")
        break
    }

    let saque = saques[posicaoSaque]

    if(saque<=0){
        console.log("Valor inválido")
        posicaoSaque++
        continue;
    }

    if(saque>saldo){
        console.log("Valor sacado maior que o saldo disponível")
        posicaoSaque++
        continue
    }

    saldo-=saque

    if(saldo==0){
        console.log("Saldo Zerado")
        break
    }

 
    posicaoSaque++
}

console.log("Saldo Final:",saldo)