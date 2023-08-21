//1. Declare um variável de nome weight
let weight;

//2. Que tipo de dado é a variável acima?
console.log(typeof weight); //undefined

//3. Declare uma variável e atribua valores para cada um dos dados
let name, age, starts, isSubscribed;

name = "Rafael";
age = 25;
starts = 4.8;
isSubscribed = true;

//4. A variável student abaixo é de que tipo de dados?

  //4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

  //4.2 Mostre no console as seguintes mensagens

    /*
      <name> de idade <age> pesa <weight> kg.

      atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
    */

let student = {};
console.log(typeof student); //object

student = {
  name: "Rafael",
  age: 25,
  weight: 4.8,
  isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`);

//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio
let students = [];

//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
students = [
  student
];

//7. Coloque no console o valor da posição zero do array acima
console.log(students[0]);

//8. Crie um novo student e coloque ele na posição 1 do Array students
const john = {
  name: "John",
  age: 23,
  weight: 7.8,
  isSubscribed: false
}

//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou
  /*
    console.log(a)
    var a = 1
  */
 undefined

 console.log(a); //undefined