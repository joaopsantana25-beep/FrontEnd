/*
3. Função: compararValores
Descrição: A função verifica se dois valores fornecidos são considerados
truthy . Retorna true se ambos forem verdadeiros e false caso contrário.
Conceitos utilizados:
• Truthy e Falsy : Valores como 0, null , undefined , false e &quot;&quot; (string vazia)
são falsy , enquanto outros valores são truthy .
• Operador lógico &amp;&amp;: Retorna true apenas se ambos os operandos forem
verdadeiros.

• Função Boolean : Converte um valor para seu equivalente lógico
(verdadeiro ou falso).
• Retorno: O resultado da comparação lógica é retornado.
*/

function compararValores(valor1,valor2){
    return (valor1 && valor2)
}


console.log(compararValores(true,true))