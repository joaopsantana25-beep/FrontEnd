/*let string = "Olá";
let mensagem = string;

mensagem = "Olá Bem vindo"

console.log(mensagem)
console.log(string)*/

/*
let objA = {nome: "Milene"}
let objB = objA

console.log(objA)
console.log(objB)*/

/*
function saudacao(nome){
    console.log("Olá, " + nome + ", seja bem-vindo ao site")
}




function cadastrar(nome, sobrenome){
    console.log(`0lá ${nome} ${sobrenome}, você foi cadastrado com sucesso`)
}

function banco(deposito,saque){
    let saldo = deposito - saque;
    return saldo;
}

function enviarMensagem(){
    console.log("Mensagem Enviada")
}

function main(){
    enviarMensagem();
    cadastrar("Daniel","Porto")
    let saldo_atual = banco(10000,700);
    console.log(`O saldo atual da sua conta é de ${saldo_atual} reais`)
}


function exibirDetalhes(nome,curso){
    console.log("Professor: " + nome + " Curso: " + curso);
}

function mensagem(){
    console.log("Imprimindo uma mensagem")
}
*/


/*
function soma(numero1, numero2){
    console.log(numero1+numero2)
}

function calcularPrecoTotal(precoUnitario, quantidade){
    let total = precoUnitario*quantidade
    console.log("O total da sua compra é: R$ " + total + " reais") 
}

let camiseta = 30;
let quantidadeItem=3;

calcularPrecoTotal(camiseta,quantidadeItem);*/

function processarPedido(id, item1, item2, item3){
    let totalPedido = item1 + item2+ item3;
    console.log("Pedido " + id + " Processando");
    return totalPedido;
}

const pedido = {
    "nome" : "João Paulo",
    "email" : "fulano@gmail.com",
    "id" : 1234,
    "lanche" : 10,
    "batataFrita" : 10,
    "suco" : 2
};

let retornoDaFuncao = processarPedido(
    pedido.id,
    pedido.lanche,
    pedido.batataFrita,
    pedido.suco
);


//console.log("O total do pedido é: "+ retornoDaFuncao)


function enviarNotificao(nome, idPedido, email){
    console.log(
        `Enviando email para ${email} confirmando o pedido do número ${idPedido}`
    );
    console.log(`Mensagem: ${nome}, pedido confirmado`)
}

enviarNotificao(pedido.nome,pedido.id,pedido.email) 