import * as React from "react"

export function кнопка({ назваКласа, наКлік, вимкнено, children }) {
    return (<button className={назваКласа} onClick={наКлік} disabled={вимкнено}>{children}</button>);
}
