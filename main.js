let notasAlunos = [
  { nome: "Joao", nota: 8 },
  { nome: "Maria", nota: 9 },
  { nome: "Quiteria", nota: 4 },
  { nome: "Leocir", nota: 3 }
];

function filtrarAprovados(alunos) {
  return alunos.filter(aluno => aluno.nota >= 6);
}

let alunosAprovados = filtrarAprovados(notasAlunos);
console.log("Os alunos aprovados são:", alunosAprovados);
