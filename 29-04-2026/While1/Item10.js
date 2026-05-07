//10. Crie um programa que peça senha ao usuário até que ele digite a senha correta.

let inputsSenha = [45, -12, 78, 3, -56, 91, 0, -7, 234, 19, -88, 1234, 67, -34, 5, 102, -9, 11, -2, 60]
let senha = 1234
let posicaoDoArray=0

while(true){
    
    if(posicaoDoArray==inputsSenha.length){
        console.log("Fim das tentativas")
        break;
    }

    let senhaTentada = inputsSenha[posicaoDoArray]

    if(senhaTentada==senha){
        console.log("Senha correta")
        break;
    }
    else{
        console.log("Senha inválida")
    }

    posicaoDoArray++
}