import * as підтримкаЕмоджі from "detect-emoji-support"
import render from "./render"
import "./css/index.css"
import "@babel/polyfill"
import "whatwg-fetch"

render()

if (!підтримкаЕмоджі()) {
  fetch(`./emojis/files.json`)
    .then(відповідь => відповідь.json())
    .then(масивЗображень =>
      масивЗображень.forEach(({ sourceName: назваДжерела }) => {
        // XXX not sure if this preloading works
        const зображення = new Image()
        зображення.src = назваДжерела
      }),
    )
}
