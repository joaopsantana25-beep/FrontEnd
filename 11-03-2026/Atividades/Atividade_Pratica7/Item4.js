/* Verifique se a propriedade cor existe no objeto carro usando o
operador in e imprima o resultado (true ou false).
*/

const carro = {
    "marca" : "Hyundai",
    "modelo" : "HB20",
    "Ano" : "2020",
    "Cor" : "Cinza",
    "Airbag": "Possui",
    "Itens" : ["Banco", "Radio","Pneus"]
}

console.log("Cor" in carro);