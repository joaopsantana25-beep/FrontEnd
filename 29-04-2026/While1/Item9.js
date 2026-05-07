//9. Leia números até que o usuário digite 0. Ao final, mostre a soma de todos os números digitados.

let inputsUsuario = [18, -3, 27, -14, 6, 21, -8, 35, -1, 9, -22, 40, -5, 13, -17, 7, -11, 0, 24, -2]
let posicaoDoArray=0;
let somaInputs=0;

while(true){
    let elemento = inputsUsuario[posicaoDoArray]

    if(elemento==0){
        console.log("Fim da Leitura de Inputs")
        break;
    }

    somaInputs+=elemento
    posicaoDoArray++
}

console.log("A soma dos números lidos é",somaInputs)