/*Crie uma cópia independente do objeto carro usando o operador
spread (...). Modifique a propriedade cor na cópia para "Preto" e
imprima ambos os objetos.
 */

const carro = {
    "marca" : "Hyundai",
    "modelo" : "HB20",
    "Ano" : "2020",
    "Cor" : "Cinza",
    "Airbag": "Possui",
    "Itens" : ["Banco", "Radio","Pneus"]
}

let carro3 = {...carro};

carro3.Cor="Preto"

console.log(carro)
console.log(carro3)

