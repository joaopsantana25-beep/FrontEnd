/*
5- Função: ehPrimo
Descrição : A função verifica se um número é primo (um número
maior que 1 que só é divisível por 1 e por ele mesmo). Conceitos
utilizados :
• Condicional : Para verificar se o número é menor ou igual a 1 (não
é primo).
• Looping : Para verificar se o número é divisível por qualquer outro
número menor que ele.
• Operações matemáticas : Para verificar divisibilidade.
*/

function ehPrimo(numero){
    
    if(numero==2){
        return "É primo"
    }

    if(numero<=1 || numero%2==0){
        return "Não é primo"
    }


    let limiteDivisao = Math.sqrt(numero)

    for(let i = 3;i<=limiteDivisao;i+=2){

        if(numero%i==0){
            return "Não é primo"
        }
    }

    return "É primo"
}

console.log(ehPrimo(2))
console.log(ehPrimo(29))
console.log(ehPrimo(4))