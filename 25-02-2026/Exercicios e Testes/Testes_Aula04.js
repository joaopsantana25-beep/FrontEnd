//Tipos de dados de Referência - objetos, arrays, funções
//Tipods de dados Primitivos são números, strings e booleanos 

//Criação de um array
/*
let lista = ["Banana", 23, true, "Maçã"]

console.log(lista[0])


let nome = "João";
nome[0]="M"
console.log(nome)

let nomes = ["Monitor","Teclado","Mouse"]

nomes[0]="Romário"
nomes[4]="Benjamin"

nomes.length=nomes.length-2
console.log(nomes)


let matrizVendas = [

    [100,200,300],
    [400,500,50],
    [700,400,450],
];


console.log(matrizVendas[1][2]);

let resultadoLojaB = matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2];

console.log(resultadoLojaB)
*/

/*
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    cor: "Prata",
    airbag: true,
    itens: ["abs","4 portas", "step"],
};

carro.KmRodados = 15000;
console.log(carro)
*/


let livro = {
    titulo: "Java 101",
    autor: "John Snow",
    ano: 2021,
    genero: "Programacao",
}

livro.paginas = 300
livro["idioma"] = "português"


console.log(livro)

console.log("autor" in livro);
console.log("idioma" in livro);


