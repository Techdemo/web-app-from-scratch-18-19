"use strict"
import { app } from '../app.js'

let sanitize = () => {
    app.innerHTML = " "
}

let addLoader = () => {
    const markup =
        `<div class="spinner"></div>`
    document.getElementById("root").insertAdjacentHTML("afterbegin", markup)
    // markup returns a string. Appendchild only appends nodes
}

export { sanitize, addLoader }