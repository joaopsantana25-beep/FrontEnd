/*
7. Evento de Teclado (keyup)
 Enunciado: Crie um script que capture o que o usuário digita em um campo de entrada
(&lt;input&gt;) e exiba o conteúdo no console a cada tecla solta.
*/

const input = document.getElementById("campoTexto")
const resultado = document.getElementById("resultado")

input.addEventListener("keyup",function(event){
    resultado.innerText="Você digitou: "+event.target.value;

});