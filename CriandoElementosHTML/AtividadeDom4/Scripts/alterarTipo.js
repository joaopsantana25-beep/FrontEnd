function alterarTipo(){
    const input = document.getElementById("tipo-alterado")
    const tipoInput = input.getAttribute("type")

    if(tipoInput === "password"){
        input.setAttribute ("type","text")
    }
    else{
        input.setAttribute ("type","password")
    }   
    
}