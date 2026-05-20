const lista = document.getElementById("minhaLista");

lista.addEventListener("click",function(evento){
    if(evento.target.tagName=="LI"){
        evento.target.style.textDecoration = "line-through";
        evento.target.style.color="gray";
    }

});