/*
Crie um novo objeto carro2 que seja uma cópia do objeto carro
usando a atribuição direta. Altere o valor da propriedade modelo para
"Yaris" no carro2 e mostre ambos os objetos no console para
demonstrar o comportamento de referência.
*/

const carro = {
    "marca" : "Hyundai",
    "modelo" : "HB20",
    "Ano" : "2020",
    "Cor" : "Cinza",
    "Airbag": "Possui",
    "Itens" : ["Banco", "Radio","Pneus"]
}

let carro2= carro
carro2.modelo = "Yaris"

console.log(carro)
console.log(carro2)



