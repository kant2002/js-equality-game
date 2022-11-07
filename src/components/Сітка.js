import "../css/Сітка.css"
import * as React from "react"
import { Споживач, значення } from "../data"
import РядокСітки from "./РядокСітки"

const move = e => {
  const сітка = e.target.closest(`.Сітка-обгортка`)
  const лінейкаX = сітка.querySelector(`.Сітка-лінійка-x`)
  const лінейкаY = сітка.querySelector(`.Сітка-лінійка-y`)
  const gridRect = сітка.getBoundingClientRect()
  const cellRect = сітка
    .querySelector(`.CellContent`)
    .getBoundingClientRect()
  const підсказка = сітка.querySelector(`.Сітка-підказка`)

  if (
    e.clientX - gridRect.left <=
      cellRect.left - gridRect.left ||
    e.clientY - gridRect.top <= cellRect.top - gridRect.top
  ) {
    лінейкаX.style.display = `none`
    лінейкаY.style.display = `none`
    підсказка.style.display = `none`
    return
  }
  const x = Math.min(
    значення.length - 1,
    Math.floor((e.clientX - cellRect.left) / cellRect.width),
  )
  const ширина =
    x * cellRect.width + (cellRect.left - gridRect.left - 1)
  const y = Math.min(
    значення.length - 1,
    Math.floor((e.clientY - cellRect.top) / cellRect.height),
  )
  const висота =
    y * cellRect.height + cellRect.top - gridRect.top
  лінейкаX.style.display = `block`
  лінейкаX.style.width = `${ширина}px`
  лінейкаX.style.top = `${висота - 1}px`

  лінейкаY.style.display = `block`
  лінейкаY.style.left = `${ширина}px`
  лінейкаY.style.height = `${висота}px`

  const { clientHeight, clientWidth } = document.documentElement
  підсказка.textContent = `${значення[x].назва} ${
    значення[x].значення() === значення[y].значення() ? `===` : `==`
  } ${значення[y].назва}`
  підсказка.style.display = `block`
  підсказка.style.right = `${Math.max(
    -(clientWidth - gridRect.right),
    clientWidth -
      e.clientX -
      (clientWidth - gridRect.right) -
      підсказка.offsetWidth / 2,
  )}px`
  підсказка.style.top = `${Math.min(
    clientHeight - gridRect.top - підсказка.offsetHeight,
    e.clientY - gridRect.top + підсказка.offsetHeight,
  )}px`
}

const Сітка = () => (
  <div
    className="Сітка-обгортка"
    onMouseMove={move}
    onMouseLeave={({ target }) => {
      const table = target.closest(`.Сітка-обгортка`)
      table.querySelector(
        `.Сітка-лінійка-x`,
      ).style.display = `none`
      table.querySelector(
        `.Сітка-лінійка-y`,
      ).style.display = `none`
      table.querySelector(
        `.Сітка-підказка`,
      ).style.display = `none`
    }}
  >
    <table className="Grid">
      <thead>
        <tr>
          <th />
          {значення.map(({ назва }) => (
            <th key={назва}>
              <div>{назва}</div>
            </th>
          ))}
        </tr>
      </thead>
      <Споживач>
        {({ сітка }) => (
          <tbody>
            {сітка.map((row, y) => (
              <РядокСітки key={y} cells={row} y={y} />
            ))}
          </tbody>
        )}
      </Споживач>
      <colgroup>
        <col style={{ width: `100px` }} />
      </colgroup>
    </table>
    <div className="Сітка-лінійка Сітка-лінійка-x" />
    <div className="Сітка-лінійка Сітка-лінійка-y" />
    <div className="Сітка-підказка" />
  </div>
)

export default Сітка
