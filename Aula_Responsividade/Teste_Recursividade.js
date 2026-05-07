/*
function fatorial(n){

    if(n<0){
        return "Não existe fatorial de número negativo"
    }
    if(n==0||n==1){
        return 1;
    }

    else{
        return n * fatorial(n-1);
    }
}



console.log(fatorial(-4))

function recursividade(string){
    if (string == ""){
        return 0
    }

    return 1 + recursividade(string.substring(1))
}


console.log(recursividade("Hashtag"))
console.log(recursividade("H"))
console.log(recursividade(""))


const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    pecas: {
        portas:4,
        pneus: "Sistema Abs",
        airbag: true,
    },
}

function imprimirObjeto(objeto){

    const keys = Object.keys(objeto);

    if (keys.length==0){
        return
    }

    for ( let i = 0; i< keys.length; i++){
        const key = keys[i]
        const value = objeto[key]
    


    if(typeof value == "object"){
        imprimirObjeto(value)
    }
    else{
        console.log(`${key}: ${value}`)
    }
    }

}

imprimirObjeto(carro)



const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    cor: "Prata",
    tipoCombustivel: "Gasolina",
    capacidadeDoMotor: "2.5L",
    transmissao: "Automatico",
    potencia: "203 horsepower",
    numeroAssentos: 5,
    preco: "R$25000",
}

for (info in carro){
    console.log(info);
}


let nomes = [
    "Pedro",
    "José",
    "Amarildo",
    "Carlos",
    "Julia",
    "Carla",
    "Geovana",
]

for(const nome of nomes){
    console.log(nome);
}
*/

const variavelA = true
if(variavelA){
    console.log("Condição Verdadeira")
}