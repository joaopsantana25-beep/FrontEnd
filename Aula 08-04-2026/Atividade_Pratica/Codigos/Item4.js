/*
Classificação por faixa etária
Leia a idade e classifique:
 0 a 12: Criança
 13 a 17: Adolescente
 18 a 59: Adulto
 60 ou mais: Idoso
*/

let idade = 13;


if (idade<0){
    console.log("Idade inválida")
}
else if (idade<13){
    console.log("Criança");
}
else if(idade<18){
    console.log("Adolescente");
}
else if(idade <60){
    console.log("Adulto");
}
else{
    console.log("Idoso");
}