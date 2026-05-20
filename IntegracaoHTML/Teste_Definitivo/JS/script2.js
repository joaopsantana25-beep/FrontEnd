
const botao = document.getElementById("meuBotao");

botao.addEventListener("click", function() {
    alert("Shinji Ikari");
})

//Mudamos a cor de fundo do elemento
botao.style.backgroundColor = "#765899"

const input = document.getElementById("campoTexto");
const resultado = document.getElementById("resultado");

input.addEventListener("keyup", function(event) {
    resultado.innerText = `Piloto Escolhido: ${event.target.value}`;
})