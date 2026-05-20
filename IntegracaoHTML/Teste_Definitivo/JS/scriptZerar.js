let contador = 0;
const display = document.getElementById("valor")

document.getElementById("btnIncrementar").onclick = function(){
    contador++
    display.innerText = contador
}

document.getElementById("btnZerar").onclick = function(){
    contador=0;
    display.innerText = contador;
}