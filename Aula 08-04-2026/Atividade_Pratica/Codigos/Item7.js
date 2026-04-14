/*
Classificação de temperatura
Leia uma temperatura e informe:
 abaixo de 15: Frio
 de 15 a 25: Agradável
 acima de 25: Quente
Desafio extra: acrescentar “Muito frio” e “Muito quente”.
*/

let temperatura=35;

if (temperatura<5){
    console.log("Está muito frio")
}
else if (temperatura<15){
    console.log("Está frio")
}
else if (temperatura<25){
    console.log("Está agradável")
}
else if (temperatura<35){
    console.log("Está quente")
}
else{
    console.log("Está muito quente")
}