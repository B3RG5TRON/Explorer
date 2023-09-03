/*
  Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

  - nome;
  - nota da primeira prova;
  - nota da segunda prova.

  Depois de criada a lista:

  - [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
  - [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

  Dica: para quebrar uma linha no alert() basta usar um \n na mensagem.

  Obs: você quem manda no tamanho da lista! No exemplo a lista é composta por 4 estudantes.
*/

// Criar uma lista de estudantes
let students = [
  {
    name: "João Felipe",
    grade1: 7,
    grade2: 8
  },
  {
    name: "Eduardo Bergstron",
    grade1: 8,
    grade2: 6
  },
  {
    name: "Júlia Alfonso",
    grade1: 10,
    grade2: 9
  },
  {
    name: "Bruna Almeida",
    grade1: 5,
    grade2: 2
  }
]

// Criar uma função que irá calcular a média das notas de cada aluno
function calculateAverage(grade1, grade2) {
  return (grade1 + grade2) / 2
}

// Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
let average = 7

for (let student of students) {
  let studentAverage = calculateAverage(student.grade1, student.grade2)

  if (studentAverage >= average) {
    alert(`
      Parabéns, ${student.name}! Você foi aprovado(a) no concurso.
      Sua média foi de ${studentAverage.toFixed(2)}.
    `)
  } else {
    alert(`
      ${student.name}, infelizmente você não foi aprovado(a) no concurso.
      Sua média foi de ${studentAverage.toFixed(2)}.
    `)
  }
}