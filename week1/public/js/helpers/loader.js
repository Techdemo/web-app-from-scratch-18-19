"use strict"

function addLoader (){
    const markup =
    `<div class="spinner"></div>`
    document.getElementById("root").insertAdjacentHTML("afterbegin", markup)
    // markup returns a string. Appendchild only appends nodes
}
export { addLoader }