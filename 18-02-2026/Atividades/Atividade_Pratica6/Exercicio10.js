//Crie um objeto pedido com produto, quantidade e preco. Mostre o valor total.
soma = 0

let pedido = {
    produto: [
        "Maçã", 
        "Feijão",
        "Arroz",
        "Macarrão"],

    quantidades: [
        8,
        3,
        4,
        7],

    precoUnidades: [
        4.50,
        3.00,
        5.40,
        7.00]
}


for (let i =0; i < pedido.quantidades.length;i++){
    soma += pedido.quantidades[i]* pedido.precoUnidades[i]

}


console.log( soma && ("O valor total do pedido é: R$ "+ soma.toFixed(2) +" reais") || "O valor do pedido é nulo")