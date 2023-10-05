import { fortuneCookie } from './fortune-cookie.js'

const cookie = fortuneCookie()

function onKeypress(event) {
  const keyPressed = event.key
  cookie.hotKeys({ keyPressed })
}

document.addEventListener('keypress', onKeypress)
