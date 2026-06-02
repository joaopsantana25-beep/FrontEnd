function criarElemento(){
    const ul = document.getElementById("lista-de-elementos")

    const li = document.createElement("li")

    li.innerText = "Novo elemento criado"

    ul.appendChild(li);
}

function criarCampoInput(){
    const ul = document.getElementById("lista-de-elementos")

    const li = document.createElement("li")

    li.innerHTML = '<input type = "text" />'

    ul.appendChild(li);

}

function criarInnerText(){
    const ul = document.getElementById("lista-de-elementos")

    const li = document.createElement("li")

    li.innerText="Item criado com innerText"

    ul.appendChild(li);

}

function criarTextContent(){
    const ul = document.getElementById("lista-de-elementos")

    const li = document.createElement("li")

    li.textContent="Item criado com textContent"

    ul.appendChild(li);

}

function criarInnerHtml(){
    const ul = document.getElementById("lista-de-elementos")

    const li = document.createElement("li")

    li.innerHTML='<input text = "text">'

    ul.appendChild(li)
}

function mostrarInnerText(){
    const div = document.getElementById("item6");

    console.log("InnerText:", div.innerText);
}

function mostrarTextContent(){
    const div = document.getElementById("item6");

    console.log("TextContent:", div.textContent);
}


function mudarImagem(){
    const imagem = document.getElementById("imagem")
    const srcAtual = imagem.getAttribute("src")

    if(srcAtual === "/imagens/elefanteAzul.jpg"){
        imagem.setAttribute("src","/imagens/elefanteRosa.jpg")
    }
    else{
        imagem.setAttribute("src","/imagens/elefanteAzul.jpg")

    }
}

function mostrarSRC(){

    const imagem = document.getElementById("imagem")
    const srcAtual = imagem.getAttribute("src")

    const h2 = document.getElementById("srcElemento")

   h2.textContent = srcAtual

}

function trocarTipo(){

    const input = document.getElementById("input")
    const tipoInput = input.getAttribute("type")

    if(tipoInput === "password"){
        input.setAttribute('type','text')
    }
    
}

function mostrarSenha(){

    const input = document.getElementById("input")
    const tipoInput = input.getAttribute("type")

    if(tipoInput === "password"){
        input.setAttribute('type','text')
    }
    else{
        input.setAttribute('type','password')
    }
}