import createContext from "immer-wieder"
import i18n, { i18nConfig } from "es2015-i18n-tag"
import даніПерекладу from "./translationData"

/* eslint-disable no-new-func, eqeqeq */
export const значення = [
  `true`,
  `false`,
  `1`,
  `0`,
  `-1`,
  `"true"`,
  `"false"`,
  `"1"`,
  `"0"`,
  `"-1"`,
  `""`,
  `null`,
  `undefined`,
  `Infinity`,
  `-Infinity`,
  `[]`,
  `{}`,
  `[[]]`,
  `[0]`,
  `[1]`,
  `NaN`,
].map(назва => ({
  назва,
  значення: () => new Function(`return ${назва}`)(),
}))

const сітка = значення.map(a =>
  значення.map(b => ({
    a,
    b,
    loose: a.значення() == b.значення(),
    strict: a.значення() === b.значення(),
    увімкнено: false,
  })),
)
export const total =
  []
    .concat(...сітка)
    .filter(({ strict, loose }) => loose && !strict).length / 2

const оновитиЗаголовок = короткаЛокаль => {
  document.title = i18n`JavaScript Equality Table Game`
  document.documentElement.setAttribute(`lang`, короткаЛокаль)
}
const мовнийХеш = window.location.hash.slice(1)
const локаль =
  (мовнийХеш &&
    [...даніПерекладу.keys()].find(x =>
      x.startsWith(мовнийХеш),
    )) ||
  `en-US`
i18nConfig({
  locales: локаль,
  translations: даніПерекладу.get(локаль).data,
})
const вкороченаЛокаль = довгаЛокаль => {
  const [короткаЛокаль] = довгаЛокаль.split(`-`)
  return короткаЛокаль
}
оновитиЗаголовок(вкороченаЛокаль(локаль))

const ініц = draft =>
  void Object.assign(draft, {
    сітка,
    показуватиРезультати: false,
    misses: 0,
    hits: 0,
    flags: 0,
  })

const applyInit = o => {
  ініц(o)
  return o
}
const { Provider, Consumer } = createContext(setState =>
  applyInit({
    локаль,
    дії: {
      показатиРезультати: () =>
        void setState(state => {
          state.показуватиРезультати = !state.показуватиРезультати
        }),
      перемкнути: (x, y) =>
        void setState(чорновик => {
          if (чорновик.показуватиРезультати) {
            return
          }
          const { loose, увімкнено } = чорновик.сітка[x][y]
          чорновик.сітка[y][x].увімкнено = !увімкнено
          if (x !== y) {
            чорновик.сітка[x][y].увімкнено = !увімкнено
          }
          чорновик.flags += !увімкнено ? 1 : -1
          if (loose) {
            чорновик.hits += !увімкнено ? 1 : -1
          } else {
            чорновик.misses += !увімкнено ? 1 : -1
          }
        }),
      скинути: e => {
        e.preventDefault()
        setState(ініц)
      },
      змінитиЛокаль: async e => {
        const локалі = e.target.value
        const переклади =
          (await даніПерекладу.get(локалі)).data || []
        i18nConfig({
          locales: локалі,
          translations: переклади,
        })
        setState(state => {
          state.локаль = локалі
        })
        const короткаЛокаль = вкороченаЛокаль(локалі)
        window.history.replaceState(
          null,
          ``,
          короткаЛокаль === `en` ? `/` : `#${короткаЛокаль}`,
        )
        оновитиЗаголовок(короткаЛокаль)
      },
    },
  }),
)
export { Provider, Consumer as Споживач }
