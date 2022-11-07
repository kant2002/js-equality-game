import * as React from "react"
import i18n from "es2015-i18n-tag"
import "../css/Апплікація.css"
import * as emojiSupport from "detect-emoji-support"
import { Provider, Споживач } from "../data"
import Сітка from "./Сітка"
import БічнаПанель from "./БічнаПанель"

const Апплікація = () => (
  <Provider>
    <Споживач>
      {({ показуватиРезультати }) => (
        <div className="Апплікація-обгортка">
          <div
            className={`App Апплікація-результати-${показуватиРезультати} Апплікація-емодзі-${emojiSupport()}`}
          >
            <h1 className="Апплікація-назва">
              {i18n`How well do you know`} <code>==</code>
              {` `}
              {i18n`in JavaScript?`}
            </h1>
            <div className="Апплікація-зміст">
              <Сітка показуватиРезультати={показуватиРезультати} />
              <БічнаПанель />
            </div>
          </div>
          <footer className="App-credit">
            {i18n`made by`}
            {` `}
            <a
              href="http://untu.ms/"
              rel="noopener noreferrer"
              target="_blank"
            >
              slikts
            </a>
            &nbsp;&nbsp;&bull;&nbsp; {i18n`contribute a`}&nbsp;
            <a href="https://github.com/slikts/js-equality-game#adding-a-translation">
              {i18n`translation`}
            </a>
          </footer>
        </div>
      )}
    </Споживач>
  </Provider>
)

export default Апплікація
