// ==============================
// 1. SELEÇÃO DE ELEMENTOS
// ==============================
const catalogo = document.getElementById("catalogo");
const contador = document.getElementById("contador");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnCupom = document.getElementById("mostrarCupom");

let totalItens = 0;


// ==============================
// FUNÇÃO: ATIVAR BOTÃO DE COMPRA
// ==============================
function ativarCompra(botao) {
    botao.addEventListener("click", () => {
        totalItens++;
        contador.innerText = totalItens; // manipulação de conteúdo
    });
}


// Ativar botões já existentes no HTML
document.querySelectorAll(".comprar").forEach(ativarCompra);


// ==============================
// 2. CRIAÇÃO DINÂMICA DE PRODUTO
// ==============================
btnAdicionar.addEventListener("click", () => {

    const nome = document.getElementById("nomeProduto").value;
    const preco = document.getElementById("precoProduto").value;

    if (!nome || !preco) {
        alert("Preencha todos os campos!");
        return;
    }

    // cria elemento
    const card = document.createElement("div");
    card.classList.add("produto");

    // conteúdo dinâmico
    card.innerHTML = `
        <h3>${nome}</h3>
        <p>R$ ${Number(preco).toFixed(2)}</p>
        <button class="comprar">Adicionar à Sacola</button>
    `;

    // adiciona no catálogo
    catalogo.appendChild(card);

    // ativa evento no novo botão
    const novoBotao = card.querySelector(".comprar");
    ativarCompra(novoBotao);

});


// ==============================
// 3. CUPOM (MANIPULAÇÃO DE ATRIBUTOS)
// ==============================
btnCupom.addEventListener("click", () => {

    const cupomContainer = document.getElementById("cupom");
    const campoCupom = document.getElementById("campoCupom");

    // mostra campo oculto
    cupomContainer.style.display = "block";

    // alterna tipo do input (password <-> text)
    const tipoAtual = campoCupom.getAttribute("type");

    if (tipoAtual === "password") {
        campoCupom.setAttribute("type", "text");
    } else {
        campoCupom.setAttribute("type", "password");
    }
});