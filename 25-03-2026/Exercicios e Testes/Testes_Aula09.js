/*
let notNumber = NaN;
let notNumber2 = 0/0;
let string = Number("Olá");
let mensagens = "Olá Impressionador";


console.log(Number.isNaN(notNumber));
console.log(Number.isNaN(notNumber2));
console.log(Number.isNaN(string));
console.log(Number.isNaN(mensagens));
console.log(Number.isNaN(42));
console.log(Number.isNaN(42.74637));

function validarEntrada(valor){
    if(Number.isNaN(Number(valor))){
        return "Entrada inválida!Por favor, insira um número!"
    }

    return "Entrada Válida";
}

console.log(validarEntrada("Olá"));
console.log(validarEntrada(42));
console.log(validarEntrada("42"));



const PI = Math.PI;

console.log(PI)

const raizQuadrada = Math.sqrt(16);
console.log(raizQuadrada)

const potencial = function potencia(base,expoente){
let resultado = 1;

for(let i = 0;i<expoente;i++){
    resultado*=base;
}

return resultado

};

console.log(potencial(5,3));


let lista = [2,45,6,87,43,101];

console.log(Math.min(...lista))
console.log(Math.max(...lista))*/



const dataAtual = new Date()
console.log(dataAtual.getMonth());