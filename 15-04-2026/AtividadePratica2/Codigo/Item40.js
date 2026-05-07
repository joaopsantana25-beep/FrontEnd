/*
40. Utilizando this em Métodos Personalizados
Objetivo: Crie um objeto com um método que utiliza this para acessar e
manipular suas propriedades.
*/

let pessoa = {
    nome: "Ana",
    idade: 25,

    apresentar: function() {
        console.log("Oi, meu nome é "+this.nome + " e tenho "+this.idade+" anos")
    }
}

pessoa.apresentar()