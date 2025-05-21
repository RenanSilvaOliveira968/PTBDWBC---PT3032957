const alunos = [
    { nome: "João da Silva", nota1: 7, nota2: 8.5 },
    { nome: "Maria Oliveira", nota1: 8, nota2: 9.0 },
    { nome: "Carlos Souza", nota1: 6, nota2: 7.5 }
];

alunos.forEach(aluno => {
    const nota1Peso = aluno.nota1 * 0.6;
    const nota2Peso = aluno.nota2 * 0.4;
    const notaFinal = nota1Peso + nota2Peso;

    alert(`Aluno: ${aluno.nome}\nNota 1: ${aluno.nota1}\nNota 2: ${aluno.nota2}`);
    alert(`Nota final de ${aluno.nome}: ${notaFinal}`);
});
