/*
5. Elabore uma função chamada celsiusParaFahrenheit que
recebe uma temperatura em Celsius e converte para
Fahrenheit.
*/

function celsiusParaFahrenheit(temperatura_celsius){
    //Fórmula de conversão de celsius para farenheit
    let temperatura_farenheit = ((temperatura_celsius*9)/5 + 32);
    
    return temperatura_farenheit;
}

console.log(celsiusParaFahrenheit(0)+" °F")