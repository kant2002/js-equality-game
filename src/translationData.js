import latvian from "./translations/lv-LV.json"
import english from "./translations/en-US.json"
import dutch from "./translations/nl-NL.json"
import french from "./translations/fr-FR.json"
import german from "./translations/de-DE.json"
import polish from "./translations/pl-PL.json"
import українська from "./translations/ua-UA.json"
import spanish from "./translations/es-ES.json"
import simplifiedChinese from "./translations/zh-CN.json"
import korean from "./translations/ko-KR.json"

const даніПерекладу = new Map() //
  .set(`en-US`, { data: english, name: `English` })
  .set(`de-DE`, { data: german, name: `Deutsch` })
  .set(`fr-FR`, { data: french, name: `Français` })
  .set(`lv-LV`, { data: latvian, name: `Latviešu` })
  .set(`nl-NL`, { data: dutch, name: `Nederlands` })
  .set(`pl-PL`, { data: polish, name: `Polski` })
  .set(`ua-UA`, { data: українська, name: `Українська` })
  .set(`es-ES`, { data: spanish, name: `Spanish` })
  .set(`zh-CN`, { data: simplifiedChinese, name: `简体中文` })
  .set(`ko-KR`, { data: korean, name: `한국어` })

export default даніПерекладу
