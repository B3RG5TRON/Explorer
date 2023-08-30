/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os
  parabéns.

  Se o aluno não passou no bimestre,
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

// Solicitar o nome do aluno
let name = prompt("Qual o seu nome?")

// Solicitar as 3 notas do aluno
let grade1 = Number(prompt("Digite a primeira nota"))
let grade2 = Number(prompt("Digite a segunda nota"))
let grade3 = Number(prompt("Digite a terceira nota"))

// Calcular a média do aluno
let average = (grade1 + grade2 + grade3) / 3

// Verificar se a média é maior que 6
if (average > 6) {
  // Se a média for maior que 6, dar os parabéns
  alert(`Parabéns, ${name}! Você passou com a média de: ${average.toFixed(2)}.`)
} else {
  // Se a média for menor que 6, motivar o aluno a dar seu melhor na prova de recuperação
  alert(`Infelizmente você não passou, ${name}! Sua média foi de: ${average.toFixed(2)}. Estude para a prova de recuperação.`)
}