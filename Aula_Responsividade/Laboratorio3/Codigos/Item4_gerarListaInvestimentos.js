/*
4- Função: gerarListaInvestimentos
Descrição: A função recebe um array de valores de investimentos e um nome. Ela retorna um
novo array de objetos, onde cada objeto contém o valor do investimento e o nome fornecido.
Além disso, os investimentos são ordenados do menor para o maior. Conceitos utilizados
• Condicional (if): Verifica se o array está vazio e retorna &quot;Vazio!&quot; se não houver investimentos.
• Array e objetos ([] e {}): O array armazena os objetos que contêm as informações dos
investimentos.
• Laço de repetição (for... of): Percorre os elementos do array de investimentos.
• Método push (): Adiciona objetos ao array resultante.
• Ordenação ( sort ()): Organiza os investimentos em ordem crescente.
unções: codificar e decodificar Descrição: As funções codificar e decodificar servem para
transformar frases, substituindo vogais por números e revertendo essa substituição. • Na
função codificar, as vogais são convertidas conforme a regra:
• a → 1
• e → 2
• i → 3
• o → 4
• u → 5
• Na função decodificar, o processo é revertido para recuperar a frase original. Conceitos
utilizados
• Laço while e replace ()
• O método.replace (&quot;a&quot;, &quot;1&quot;) substitui a primeira ocorrência da letra &quot;a&quot; por &quot;1&quot;.
• Para substituir todas as ocorrências, usamos um while que continua até não haver mais a
letra a ser substituída.
• Expressões Regulares ( RegExp )
• Utilizamos replace (/a/g, &quot;1&quot;), onde /a/g significa:
• /a/ → Procurar a letra &quot;a&quot;.
• g (global) → Substituir todas as ocorrências.
• Refatoração
• O código inicial com while pode ser otimizado usando expressões regulares, reduzindo a
quantidade de linhas.
*/

function gerarListaInvestimentos(listaValoresInvestimentos,nome){
    if(listaValoresInvestimentos.length==0){
        return "Lista Vazia"
    }
    
    let objeto = []
    listaValoresInvestimentos = listaValoresInvestimentos.sort((a,b) => a.valor - b.valor)

    for (valor of listaValoresInvestimentos){

        objeto.push({
            nome: nome,
            valor: valor}

        )
    }
     objeto.sort((a,b) => a.valor - b.valor)
    return objeto
}

let array=[1,2,3,4,5,6,7,8,9,10]

console.log(gerarListaInvestimentos(array,"Pedro"))