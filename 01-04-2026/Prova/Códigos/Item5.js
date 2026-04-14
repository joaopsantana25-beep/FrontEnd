/*
Remova a proprieda airbag do objeto carro
*/

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    cor: "Prata",
    airbag: true,
    itens: ["abs","4 portas", "step"],
};

delete carro.airbag
console.log(carro)