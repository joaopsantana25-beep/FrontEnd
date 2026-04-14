/*
Desconto em compra
Leia o valor da compra:
 até R$ 99: sem desconto
 de R$ 100 a R$ 199: 10%
 de R$ 200 a R$ 499: 15%
 acima de R$ 500: 20%
Mostre o valor original, desconto e valor final.

*/

let valor= 400;
let desconto=0;

if (valor<100){
    console.log("Sem desconto")
    desconto=0;
}
else if(valor<200){
    console.log("Desconto de 10%")
    desconto = 0.1;
}
else if(valor<500){
    console.log("Desconto de 15%")
    desconto = 0.15;
}
else{
    console.log("Desconto de 20%");
    desconto = 0.20;
}



console.log("Valor Inicial: R$ "+valor)
console.log("Valor do desconto:",desconto*100,"%")
console.log("Valor final: R$ "+valor*(1-desconto))