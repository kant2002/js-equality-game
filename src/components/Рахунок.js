import * as React from "react"
import "../css/Рахунок.css"

const Букви = ({ текст, назва }) => (
  <span className={`Letters Letters-${назва}`}>
    {[...текст].map((x, i) => (
      <span key={i} className="Letters-letter">
        {x}
      </span>
    ))}
  </span>
)

const Рахунок = ({ текст }) => (
  <div className="Score">
    <Букви
      текст={``.padStart(3 - String(текст).length, `0`)}
      назва="a"
    />
    <Букви текст={String(текст)} назва="b" />
  </div>
)

export default Рахунок
