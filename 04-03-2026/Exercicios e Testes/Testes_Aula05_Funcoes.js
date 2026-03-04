const pedido = {
    "nome" : "João Paulo",
    "email" : "fulano@gmail.com",
    "id" : 1234,
    "lanche" : 10,
    "batataFrita" : 10,
    "suco" : 2
};


/*function soma(numero1, numero2){
    console.log(numero1+numero2)
}

function calcularPrecoTotal(precoUnitario, quantidade){
    let total = precoUnitario*quantidade
    console.log("O total da sua compra é: R$ " + total + " reais") 
}

let camiseta = 30;
let quantidadeItem=3;

calcularPrecoTotal(camiseta,quantidadeItem);


function processarPedido(id, item1, item2, item3){
    let totalPedido = item1 + item2+ item3;
    console.log("Pedido " + id + " Processando");
    return totalPedido;
}


let retornoDaFuncao = processarPedido(
    pedido.id,
    pedido.lanche,
    pedido.batataFrita,
    pedido.suco
);

console.log(retornoDaFuncao)


//console.log("O total do pedido é: "+ retornoDaFuncao)





function enviarNotificao(nome, idPedido, email){
    console.log(
        `Enviando email para ${email} confirmando o pedido do número ${idPedido}`
    );
    console.log(`Mensagem: ${nome}, pedido confirmado`)
}

let resultado = enviarNotificao(pedido.nome,pedido.id,pedido.email);
console.log(resultado);*/

function aplicarOperacao(x,operacao){
    //Função de Alta Ordem
    return operacao(x);
}

/*
function dobrar(numero) {
    return numero*2;
}




function criarIncrementador(incremento){
    return function(numero){
        return numero + incremento;
    };
}

const incrementoPor2= criarIncrementador(2);
console.log(incrementoPor2(5))
*/

/*
const resultado = aplicarOperacao(5, function(numero){
    return numero **2
});

console.log(resultado)*/

const numeros = [1,2,3,4];

const dobrados = numeros.map(function (numero){
    return numero*2;
})

//console.log(dobrados);

function cumprimentar(saudacao,nome="visitante"){
    console.log(`"Olá ${nome}, ${saudacao}`)
}

//cumprimentar("Boa tarde")
//cumprimentar("Boa tarde","Joao")

function calcularPreco(precoBase, desconto=0){
    let preco = precoBase*(1-desconto/100)
    return preco
}

//console.log(calcularPreco(100));
//console.log(calcularPreco(100,5));

function criarUsuario(nome,role = "Usuário Padrão"){
    console.log(`Nome: ${nome}, Role: ${role}`);
}

//criarUsuario("Ana");
//criarUsuario("Carlos","Gestor Chefe")

function comprimentar(nome){
    if (!nome){
        nome = "visitante";
    }
    console.log(`Olá, ${nome}!`);
}

comprimentar();
comprimentar("João");

function comprimentar(nome="visitante"){
    console.log(`Olá, ${nome}!`);
}

comprimentar();
comprimentar("João");