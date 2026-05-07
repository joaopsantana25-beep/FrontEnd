/*
31.Métodos de Comparação com Objetos
Objetivo: Crie um objeto que armazena uma lista de alunos e use o
método hasOwnProperty() para verificar se o aluno existe no objeto.
*/

let escola = {
    alunos: ["João","Carlos","Pedro"],
    salas: ["1","2","3","4","5"]
}

if(escola.hasOwnProperty("alunos")){
    console.log("O objeto tem a propriedade alunos")
}
else{
    console.log("O objeto não possui essa proprieda")
}