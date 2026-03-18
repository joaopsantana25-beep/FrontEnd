/*
const produto = {
    preco: 2500,
    disponiblidade: true,
    emEstoque:10
}

console.log(Object.keys(produto))
console.log(Object.values(produto))

console.log(Object.entries(produto))


Object.assign(produto, {emEstoque:10, categoria : "Eletrônicos"})
console.log(produto)
*/

/*
const pessoa = {nome:"Carlos", idade:30};
const trabalho = {pofissao: "Engenheiro",cidade: "São Paulo"}
const funcionario = {}

Object.assign(funcionario,pessoa,trabalho)

Object.defineProperty(funcionario,"salario",{
    value: 2500,
    enumerable: true,
    writable: true,
    configurable:true,
})

console.log(funcionario)

delete funcionario.salario;
console.log(funcionario)
*/

/*
const pessoa = {
    cidade: "Rio de Janeiro",
    surf: true,
    falar: function(){
        console.log("Olá")
    }
};

const joao=Object.create(pessoa)

//joao.falar();
//console.log(joao.cidade,joao.surf)

joao.nome = "João"
joao.idade = 30


//console.log(joao.hasOwnProperty("nome"))
//console.log(joao.hasOwnProperty("surf"))


for (let prop in joao){
    if (joao.hasOwnProperty(prop)){
        console.log(`Propriedade própia: ${prop}`);
    }
    else{
     console.log(`Propriedade herdada: ${prop}`);
    }   
}



const calculadora = {
    definirValores: function(v1,v2){
        this.valor1 = v1;
        this.valor2 = v2;
    },

    somar: function(){
        return this.valor1 + this.valor2
    },

    subtrair: function(){
        return this.valor1 - this.valor2
    },

    multiplicar: function(){
        return this.valor1 * this.valor2
    },

    dividir: function(){
        return this.valor1/ this.valor2
    },
};

calculadora.definirValores(10,5);

console.log("Soma: ", calculadora.somar());
console.log("Subtração: ", calculadora.subtrair());
console.log("Multiplicação: ", calculadora.multiplicar());
console.log("Dividisão: ", calculadora.dividir());

const objeto = {
    nome: "Ana",
    apresentar : function(){
        return `Meu nome é ${this.nome}`;
    },
};

console.log(objeto.apresentar());
*/

const calculadora = {
    definirValores: function(v1,v2){
        this.valor1 = v1;
        this.valor2 = v2;
    },

    somar: function(){
        return this.valor1 + this.valor2
    },

    subtrair: function(){
        return this.valor1 - this.valor2
    },

    multiplicar: function(){
        return this.valor1 * this.valor2
    },

    dividir: function(){
        return this.valor1/ this.valor2
    },
};


calculadora.definirValores(10,5);

calculadora.exponenciacao=function(){
    return this.valor1 ** this.valor2;
}

console.log("Exponencial: ", calculadora.exponenciacao());