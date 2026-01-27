//Crie um programa que imprima a frase "Ola Mundo", "Seu Nome", e "http://www.site.com.br"


//console.log("Olá Mundo!");
//console.log("João Paulo Oliveira Santana");
//console.log("http://www.site.com.br");

//crie um programa que calcule a area de um quadrado e de um retangulo
//crie um programa que mostre o dobro de um número, o resto da divisão de dois número e a raiz quadrada
function area_quadrado(a){
    return a**2;
}

function area_retangulo(base,altura){
    return base*altura;
}

function dobro(num){
    return num*2;
}


function resto(num1,num2){
    return num1%num2;
}

function sqrt(num1){
    raiz = (num1**0.5).toFixed(4);
    return raiz;
}

console.log("A area do quadrado de lado 3 é:", area_quadrado(3),'m²');

console.log("A area do retângulo de lados 3 e 4 é :", area_retangulo(3,4),'m²');

console.log("O dobro do número 3 é:", dobro(3));

console.log("O resto da divisão de 3 por 2 é:", resto(3,2));

console.log("A raíz quadrada de 24 é:", sqrt(24));