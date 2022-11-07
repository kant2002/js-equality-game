import * as React from "react"
import "../css/Емоджі.css"

const Емоджі = ({ символ, позначка }) => {
  const path = `./emojis/${символ
    .codePointAt(0)
    .toString(16)}.svg`
  return (
    <span
      className={`Emoji Emoji-${позначка}`}
      style={{
        backgroundImage: `url(${path})`,
      }}
    >
      <span className="Emoji-symbol">{символ}</span>
    </span>
  )
}
export default Емоджі
