import { getRandomPhrase } from './utils/get-random-phrase.js'

export function fortuneCookie() {
  const fortuneCookie = document.querySelector('#cookie')
  const screenOne = document.querySelector('.screen1')
  const screenTwo = document.querySelector('.screen2')
  const buttonOpenAnother = document.querySelector('.screen2 button')
  const messageElement = document.querySelector('#message span')

  fortuneCookie.addEventListener('click', onFortuneCookieClick)
  buttonOpenAnother.addEventListener('click', toggleScreen)

  function onFortuneCookieClick() {
    toggleScreen()
  }

  async function changePhrase() {
    const phrase = await getRandomPhrase()
    messageElement.textContent = phrase
  }

  async function toggleScreen() {
    const screenOneIsVisible = !screenOne.classList.contains('hide')

    if (screenOneIsVisible) {
      await changePhrase()
    }

    screenOne.classList.toggle('hide')
    screenTwo.classList.toggle('hide')
  }

  /**
   * @param {Object} params
   * @param {string} params.keyPressed
   */
  function hotKeys(params) {
    const acceptedKeys = {
      async Enter() {
        const isFocusedOpenAnother = document.activeElement === buttonOpenAnother

        if (!isFocusedOpenAnother) {
          toggleScreen()
        }
      }
    }

    const keyFunction = acceptedKeys[params.keyPressed]

    if (keyFunction) {
      keyFunction()
    }
  }

  return {
    hotKeys,
  }
}
