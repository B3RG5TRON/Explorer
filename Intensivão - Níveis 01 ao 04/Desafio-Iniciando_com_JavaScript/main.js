/*
  Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

  1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
  2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
  3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
  4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
  5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
  6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
  7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
  8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
  9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
  10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/

// 1
alert("Hello World!")

// 2
let num1 = 5
let num2 = 10

alert(Number(num1) + Number(num2))

// 3
const valueOfExercise3 = "olá"

if (typeof valueOfExercise3 === "number") {
  alert("É um número")
} else {
  alert("Não é um número")
}

// 4
const valueOfExercise4 = "olá"

if (typeof valueOfExercise4 === "string") {
  alert("É uma string")
} else {  
  alert("Não é uma string")
}

// 5
const valueOfExercise5 = true

if (typeof valueOfExercise5 === "boolean") {
  alert("É um booleano")
} else {
  alert("Não é um booleano")
}

// 6
let num6 = 6
let num5 = 5

alert(Number(num6) - Number(num3))

// 7
let num7 = 7
let num3 = 3

alert(Number(num7) * Number(num3))

// 8
let num8 = 8
let num4 = 4

alert(Number(num8) / Number(num4))

// 9
let num9 = 9

if (num9 % 2 === 0) {
  alert("É um número par")
} else {
  alert("Não é um número par")
}

// 10
let num10 = 6

if (num10 % 2 !== 0) {
  alert("É um número ímpar")
} else {
  alert("Não é um número ímpar")
}