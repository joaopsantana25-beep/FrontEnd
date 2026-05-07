//7.Peça várias notas ao usuário até que ele digite -1. Ao final, calcule e mostre a média das notas.

let notas = [3.25, 7.80, 0.00, 10.00, -5.00,5.12, 2.99, 9.45, 4.60, 6.33, 8.01, 1.77, 10.00, 0.50, 7.25, 3.90, 5.67, 2.10, 9.99, 6.40]
let index=0
let numeroNotas=0
let soma=0

do{
    if(index==notas.length){
        console.log("Fim do número de notas")
        break;
    }
    
    let nota = notas[index]

    if(nota==-1){
        console.log("Fim da leitura")
        break
    }

    if(nota<0 && nota!=-1){
        console.log("Nota inválida")
        index++
        continue
    }

    soma+=nota
    numeroNotas++
    index++

}while(true)

if(numeroNotas==0){
    console.log("Nenhuma nota foi computada!")
}
else{
    let media = soma/numeroNotas
    console.log("A média das notas é:",media.toFixed(2))
}