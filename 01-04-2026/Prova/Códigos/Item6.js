/*
Verifique se a propriedade ano existe no objeto carro utilizando o operador in
*/

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    cor: "Prata",
    airbag: true,
    itens: ["abs","4 portas", "step"],
};

console.log(("ano"in carro)&&"A propriedade existe no objeto"||"A propriedade não existe na pasta")