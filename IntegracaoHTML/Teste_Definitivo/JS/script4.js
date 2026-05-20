function focar() {
    document.getElementById("campoNome").style.background = "#8bd450";
}

function sair() {
    const campo = document.getElementById("campoNome");
    campo.style.background = "#765899";
    document.getElementById("mensagem").innerText = "Unidade 01 Dispertou!";
}