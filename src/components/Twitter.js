import * as React from "react"
import i18n from "es2015-i18n-tag"
import { кнопка } from "../ua"

const windowOptions = `scrollbars=yes,resizable=yes,toolbar=no,location=yes`
const width = 550
const height = 420
const winHeight = window.screen.height
const winWidth = window.screen.width

const handleIntent = (e, disabled = false) => {
  const left = Math.round(winWidth / 2 - width / 2)
  const top =
    winHeight > height
      ? Math.round(winHeight / 2 - height / 2)
      : 0
  if (!disabled) {
    window.open(
      e.target.href,
      `intent`,
      `${windowOptions},width=${width},height=${height},left=${left},top=${top}`,
    )
  }
  e.preventDefault()
}

const Twitter = ({ text, disabled }) => {
  const img = (
    <img
      src="https://raw.githubusercontent.com/slikts/js-equality-game/assets/twitter.svg?sanitize=true"
      width="20"
      height="16"
      alt="Twitter"
    />
  )
  return disabled ? (
    <кнопка назваКласа="Twitter" вимкнено>
      {img}
    </кнопка>
  ) : (
    <a
      title={i18n`Share your result on Twitter`}
      className={`Twitter button ${disabled ? `disabled` : ``}`}
      onClick={e => handleIntent(e, disabled)}
      href={`https://twitter.com/intent/tweet?text=${text}`}
    >
      {img}
    </a>
  )
}

export default Twitter
