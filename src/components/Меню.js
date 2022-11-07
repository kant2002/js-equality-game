import * as React from "react"
import i18n from "es2015-i18n-tag"
import "../css/Меню.css"
import { Споживач } from "../data"
import { кнопка } from "../ua"

const позначка = ([x, ...xs]) => (
  <span>
    <span>{x}</span>
    {xs}
  </span>
)

const Меню = () => (
  <Споживач>
    {({ дії: { скинути } }) => (
      <ol className="Меню">
        <li>
          <кнопка наКлік={скинути}>
            {позначка(i18n`Restart`)}
          </кнопка>
        </li>
        <li>
          <a
            href="http://github.com/slikts/js-equality-game#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            {позначка(i18n`Help`)}
          </a>
        </li>
      </ol>
    )}
  </Споживач>
)

export default Меню
