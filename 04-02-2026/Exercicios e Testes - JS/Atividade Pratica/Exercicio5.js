//Calculo de Resto da Divisão

function resto(num1,num2){
    if (num2==0){
        return "É impossível dividir por 0"
    }

    else {
        return num1%num2
    }
}

console.log("O resto da divisão de 5 por 3 é:", resto(5,3))