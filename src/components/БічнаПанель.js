import * as React from "react"
import i18n from "es2015-i18n-tag"
import "../css/БічнаПанель.css"
import Результати from "./Результати"
import Меню from "./Меню"
import Рахунок from "./Рахунок"
import { Споживач, total } from "../data"
import Емоджі from "./Емоджі"
import translationData from "../translationData"

const БічнаПанель = () => (
  <Споживач>
    {({
      hits,
      flags,
      показуватиРезультати,
      локаль,
      дії: { змінитиЛокаль },
    }) => (
      <div className="БічнаПанель">
        <Меню />

        <div className="БічнаПанель-група Sidebar-about">
          <label>{i18n`About`}</label>
          <p>
            {i18n`Test your mettle against what's considered a textbook example of a confusing language design flaw – JavaScript's loose equality operator.`}
          </p>
          <p>
            {i18n`Flag all cells where the values are loosely equal according to`}
            <code>==</code>.{` `}
            {i18n`The cells that are strictly equal are already revealed.`}
          </p>
          <p>
            {i18n`The table is diagonally symmetrical, so only one side needs to be flagged.`}
          </p>
          <p>{i18n`Wrong guesses count against the final score:`}</p>
          <p className="БічнаПанель-матем">
            {i18n`wrongness`} =&nbsp;
            <span>
              <span>{i18n`flags - hits + misses`}</span>
              {` `}
              <span>{i18n`max hits`}</span>
            </span>
          </p>
        </div>

        <div className="БічнаПанель-група БічнаПанель-мова">
          <label>{i18n`Language`}</label>
          <p>
            <select value={локаль} onChange={змінитиЛокаль}>
              {[...translationData].map(([code, { name }]) => (
                <option value={code} key={code}>
                  {name}
                </option>
              ))}
            </select>
          </p>
        </div>

        <div className="БічнаПанель-група Sidebar-score">
          <label>{i18n`Score`}</label>
          <div className="БічнаПанель-група-container">
            <div
              className="Results-wrapper Results-flags"
              title={i18n`Flags`}
            >
              <Емоджі символ="🚩" />
              <Рахунок текст={String(flags)} />
            </div>
            <div
              className="Results-wrapper Results-hits"
              title={i18n`Hits`}
            >
              <Емоджі символ="✔️" позначка="hit" />
              <Рахунок текст={показуватиРезультати ? hits : ``} />
            </div>
            <div
              className="Results-wrapper Results-misses"
              title={i18n`Misses`}
            >
              <Емоджі символ="❌" />
              <Рахунок
                текст={показуватиРезультати ? total - hits : ``}
              />
            </div>
          </div>
        </div>
        <div className="БічнаПанель-група Sidebar-results">
          <label>{i18n`Results`}</label>
          <Результати />
        </div>
      </div>
    )}
  </Споживач>
)

export default БічнаПанель
