//9.Simule um sistema de menu que:
// Mostre opções (1 - Soma, 2 - Subtração, 0 - Sair)
// Continue executando até o usuário escolher sair (0)

let inputsUsuario=[1, 2, 1, 2, 1, 2, 1, 8, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]
let num1=5
let num2=8;
let resultado=0
let index=0
let contadorSomas=0
let contadorSub=0

console.log("Suas opções são 1 para somar,2 para subtrair e 0 para sair")
    

do{
    if(index==inputsUsuario.length){
        console.log("Fim dos inputs do usuário")
        break;
    }

  
    let input = inputsUsuario[index]

    if(input==0){
        console.log("Fim da Leitura dos Inputs")
        break;
    }

    if(input!=1 && input!=2){
        console.log("Input inválido")
        index++
        continue
    }

    if(input==1){
        resultado+=num1
        contadorSomas++
    }
    
    if(input==2){
        resultado-=num2
        contadorSub++
    }

    index++
    
}while(true)

console.log("O resultado das operações é:",resultado)
console.log("Houve",contadorSomas,"somas e",contadorSub,"subtrações")