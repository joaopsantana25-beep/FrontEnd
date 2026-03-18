/*
const primeiraVariavelDoCodigo = "Texto inicial"

function printToConsole(){
    console.log(primeiraVariavelDoCodigo);
}

printToConsole();


function printToConsole(){
    const primeiraVariavelDoCodigo = 'segundo texto'
    function secondFunction(){
        console.log("imprime a segunda mensagem")
    }
    console.log(primeiraVariavelDoCodigo)
    secondFunction()
}
printToConsole();
*/

let global = "Sou do escopo Global"
function mensagem(){

    console.log(global)
    if(true){
        let bloco = "Sou do bloco IF"
        console.log(bloco)
    }
}
mensagem()
console.log(global)
