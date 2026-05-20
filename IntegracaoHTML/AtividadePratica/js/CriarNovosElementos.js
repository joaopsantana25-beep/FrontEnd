/*
4.Criação de Novos Elementos
 Enunciado: Demonstre como criar um novo elemento de parágrafo &lt;p&gt; via JavaScript,
definir um texto para ele e adicioná-lo dentro de uma &lt;div&gt; com id=&quot;container&quot;
*/


const novoParagrafo = document.createElement("p")
novoParagrafo.innerText = "Eu sou um novo parágrafo"

document.getElementById("novoElemento").appendChild(novoParagrafo)