//4.Crie um programa que solicite uma senha e continue pedindo até que a senha correta seja digitada.


let inputsSenha = [45, -12, 78, 3, -56, 91, 0, -7, 234, 19, -88, 1234, 67, -34, 5, 102, -9, 11, -2, 60]
let senha = 1234
let posicaoDoArray=0

do{
    if(posicaoDoArray==inputsSenha.length){
        console.log("Fim das tentativas")
        break;
    }

    let senhaTentada = inputsSenha[posicaoDoArray]

    if(senhaTentada===senha){
        console.log("Senha correta")
        break;
    }
    else{
        console.log("Senha inválida")
    }

  
    posicaoDoArray++

}
while(true)
  