/*
Categoria de produto e frete
Leia a categoria de um produto:
 eletrônicos
 roupas
 alimentos
 livros
Defina uma taxa de frete para cada categoria.
*/

let categoria = "roupas"

categoria = categoria.toLowerCase();

switch (categoria){
    case "eletrônicos":
        console.log("A taxa de frete é de 20%");
        break;

    case "roupas":
        console.log("A taxa de frete é de 10%")
        break;

    case "alimentos":
        console.log("A taxa de frete é de 5%");
        break;

    case "livros":
        console.log("A taxa de frete é de 0%")
    
    default:
        console.log("Categoira inválida");
        break;
}