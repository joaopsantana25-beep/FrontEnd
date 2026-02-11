//Divisão de Dois Números

function div(num1,num2){
    if (num2 ==0) {
        return "É impossível dividir por 0"
    }

    else {

        let resultado = num1/num2
        resultado = resultado.toFixed(2)
        return resultado
    }
}


console.log("A razão de 5 por 3 é:",div(5,3))