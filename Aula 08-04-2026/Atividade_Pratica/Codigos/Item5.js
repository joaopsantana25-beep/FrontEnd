/*
Calculadora de IMC com classificação
Leia peso e altura, calcule o IMC e classifique:

 Abaixo do peso
 Peso normal
 Sobrepeso
 Obesidade
*/


//altura em metros 
let altura = 1.67
let peso = 62
let IMC = 0;

IMC = peso / altura**2;

if (IMC<18.5){
    console.log("Baixo Peso")
}
else if(IMC<25){
    console.log("Peso normal")
}
else if(IMC<30){
    console.log("Sobrepeso")
}
else{
    console.log("Obesidade")
}

