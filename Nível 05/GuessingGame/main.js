// Variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.floor(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", handleClickEnter)

// Funções
function handleTryClick(event) {
  event.preventDefault() // não recarrega a página

  const inputNumber = document.querySelector("#inputNumber")

  if (inputNumber.value === "") {
    alert("Informe um número!")
    inputNumber.value = ""
    xAttempts = 1
    return
  }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas!`
  } else if (Number(inputNumber.value) < 0) {
    alert("O número digitado é menor do que zero")
  } else if (Number(inputNumber.value) > 10) {
    alert("O número digitado é maior que 10")
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick(event) {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.floor(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleClickEnter(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick(event)
  }
}