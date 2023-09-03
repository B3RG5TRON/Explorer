/*
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/

let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));

let sum = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
let rest = num1 % num2;

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A multiplicação dos dois números é: ${mult}`);
alert(`A divisão dos dois números é: ${div}`);
alert(`O resto da divisão dos dois números é: ${rest}`);

if (sum % 2 == 0) {
  alert(`A soma dos dois números é par!`);
} else {
  alert(`A soma dos dois números é ímpar!`);
}

if (num1 == num2) {
  alert(`Os números são iguais!`);
} else {
  alert(`Os números são diferentes!`);
}
