/* 
Remova a propriedade airbag do objeto carro usando o operador
delete e imprima o objeto modificado.
*/

const carro = {
    "marca" : "Hyundai",
    "modelo" : "HB20",
    "Ano" : "2020",
    "Cor" : "Cinza",
    "Airbag": "Possui",
    "Itens" : ["Banco", "Radio","Pneus"]
}

delete carro.Airbag;
console.log(carro)