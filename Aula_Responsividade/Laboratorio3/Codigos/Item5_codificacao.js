/*
funções: codificar e decodificar Descrição: As funções codificar e decodificar servem para
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

function codificar(frase){

    let vogais = ["a","e","i","o","u"]
    let i =1
    frase = frase.toLowerCase()

    for(let vogal of vogais){
        frase = frase.replaceAll(vogal,i)
        i++
    }

    return frase
}

function decodificar(frase){

    let vogais = ["a","e","i","o","u"]
    let i =1
    frase = frase.toLowerCase()

    for(let vogal of vogais){
        frase = frase.replaceAll(i,vogal)
        i++
    }

    return frase
}


let sentenca = "Bom dia, Romario e Peixe. Batata doce e banana de Goiabada"


console.log(codificar(sentenca))
console.log(decodificar(codificar(sentenca)))