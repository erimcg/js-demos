import * as creator from '../modules/create-elements.js'

let section1 = document.querySelector("#circles")

creator.appendCircle(section1)

function insertCircle() {
    creator.appendCircle(section1)
}

section1.addEventListener("click", insertCircle)

let section2 = document.querySelector("#squares")

creator.appendSquare(section2)

section2.addEventListener("click", () => {
    creator.appendSquare(section2)
})

