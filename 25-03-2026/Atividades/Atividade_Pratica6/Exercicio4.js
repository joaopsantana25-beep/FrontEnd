//Crie um objeto aluno com nome, nota e curso. Remova a propriedade curso.

let aluno = {
    nome: "Ruan Pablo",
    nota: 9.3,
    curso: "Técnico em Edificações"
}

console.log(aluno)

delete aluno.curso

console.log(aluno)
