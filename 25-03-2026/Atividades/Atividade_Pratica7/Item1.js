/*Crie um objeto chamado carro com as propriedades: marca, modelo,
ano, cor, airbag e itens (onde itens é um array contendo alguns itens
do carro). Imprima no console o valor da propriedade modelo
utilizando tanto a notação de ponto quanto a de colchetes.*/

const carro = {
    "marca" : "Hyundai",
    "modelo" : "HB20",
    "Ano" : "2020",
    "Cor" : "Cinza",
    "Airbag": "Possui",
    "Itens" : ["Banco", "Radio","Pneus"]
}

console.log(carro["modelo"]);
console.log(carro.modelo);