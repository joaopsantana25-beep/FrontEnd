//Crie um objeto livro e verifique se existe a propriedade autor.

let livro = {
    paginas: 300,
    autor: "Pedro Alcantara",
    ano: 2024,
    editora: "Abril"
}

console.log("autor" in livro && "Existe a propriedade autor em livro" || "A propriedade autor não existe no objeto livro")