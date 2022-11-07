import * as React from "react"
import { значення } from "../data"
import { КлітинаКонтента, УправляючаКлітина } from "./Клітина"

const РядокСітки = ({ cells, y }) => (
  <tr>
    <th>
      <div>{значення[y].назва}</div>
    </th>
    {cells.map(({ a, b, loose, strict, увімкнено }, x) => (
      <td key={`${x}-${y}`}>
        <div
          className={`Cell Cell-loose-${loose} Cell-strict-${strict}`}
          data-tooltip={`${a.name} ==${strict ? `=` : ``} ${
            b.name
          }`}
        >
          <КлітинаКонтента увімкнено={увімкнено} />
          <УправляючаКлітина x={x} y={y} />
        </div>
      </td>
    ))}
  </tr>
)

export default РядокСітки
