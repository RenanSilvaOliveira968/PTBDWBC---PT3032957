class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

const alunos = [
    new Aluno("João", "Silva", 7, 8.5),
    new Aluno("Maria", "Oliveira", 5, 6),
    new Aluno("Carlos", "Souza", 9, 8),
    new Aluno("Ana", "Lima", 6, 5.5),
    new Aluno("Bruno", "Pereira", 4, 7)
];

function exibirResultados(alunos) {
    alunos.forEach(aluno => {
        alert(
            `Aluno: ${aluno.nomeCompleto()}\n` +
            `Média: ${aluno.media().toFixed(2)}\n` +
            `Situação: ${aluno.situacao()}`
        );
    });
}

exibirResultados(alunos);


