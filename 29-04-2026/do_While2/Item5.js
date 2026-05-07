//5.Leia números informados pelo usuário até que ele digite 0. Ao final, mostre a soma dos números digitados.

let inputsUsuario = [7, -3, 15, 22, 9, -11, 4, 18, 31, -6, 12, 27, 5, -2, 14, 20, -8, 33, 1]
let posicaoInput = 0
let somaInputs=0

do{
    if(posicaoInput==inputsUsuario.length){
        console.log("Fim dos inputs do Usuario")
        break;
    }

    let input = inputsUsuario[posicaoInput]

    if(input==0){
        console.log("Fim da leitura dos inputs")
        break;
    }

    somaInputs+=input
    posicaoInput++
}while(true);

console.log(somaInputs)