function mudarImagem(){
    const img = document.getElementById("imagem-para-alterar")
    const srcAtual = img.getAttribute("src")

    if(srcAtual === "Imagem/elefanteThanks.png"){
        img.setAttribute("src","Imagem/elefantePequenoPrincipe.png")
    }
    else{
        img.setAttribute("src","Imagem/elefanteThanks.png")
    }
}