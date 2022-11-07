import * as React from "react"
import "../css/Клітина.css"
import { Споживач } from "../data"
import Емоджі from "./Емоджі"
import { кнопка } from "../ua"

export const КлітинаКонтента = ({ увімкнено }) => (
  <div className={`CellContent CellContent-on-${увімкнено}`}>
    <Емоджі позначка="hit" символ="✔️" />
    <Емоджі позначка="miss" символ="❌" />
    <Емоджі позначка="flag" символ="🚩" />
  </div>
)

export const УправляючаКлітина = ({ x, y }) => (
  <Споживач>
    {({ дії: { перемкнути } }) => (
      <кнопка
        назваКласа="CellControl"
        наКлік={() => void перемкнути(x, y)}
      />
    )}
  </Споживач>
)
