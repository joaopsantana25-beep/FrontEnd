/*
29.Utilizando else e else if
Objetivo: Crie uma função que verifica a faixa etária de uma pessoa e
exibe uma mensagem apropriada usando if, else if e else.
*/

let idade = 28

function AgeVerify(idade){
    if (idade<12){
        return "Criança"
    }
    else if(idade<18){
        return "Adolescente"
    }
    else if(idade<60){
        return "Adulto"
    }
    else{
        return "Idoso"
    }
}

console.log(AgeVerify(idade))