let firstNumber = prompt("Digite o primeiro número: ")
let secondNumber = prompt("Digite o segundo número: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const subtraction = firstNumber - secondNumber
const multiplication = firstNumber * secondNumber
const division = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("A soma dos números é: " + sum)
alert("A subtração dos números é: " + subtraction)
alert("A multiplicação dos números é: " + multiplication)
alert("A divisão dos números é: " + division)
alert("O resto da divisão dos números é: " + restDiv)