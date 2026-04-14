/*
Sistema simples de notas
Leia a nota de um aluno e mostre:
 “Aprovado” se nota for maior ou igual a 7
 “Reprovado” se for menor que 7
Desafio extra: validar notas entre 0 e 10.
*/

let nota = 11;

if (nota>=0 && nota <=10){
    if(nota >=7){
        console.log("Aprovado");
    }
    else{
        console.log("Reprovado");
    }
}
else{
    console.log("Nota Inválida");
}