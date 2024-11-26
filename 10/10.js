import { data } from "./data.js"
import { Numeral } from "./Numeral.js"

console.log(data)

let numbers = []

for (let elm of data) {
    console.log(elm)

    let n = new Numeral(elm.word, elm.number)
    console.log(n)

    numbers.push(n)
}

let main = document.querySelector("main")

for (let obj of numbers) {
    let elm = document.createElement("section")
    elm.innerHTML = `${obj.word} <br> ${obj.number}`

    main.appendChild(elm)
}

console.log(numbers)


