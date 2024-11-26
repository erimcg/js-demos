import { getRandomHexColor, getRandomRGBColor } from "./random-colors.js"

function appendCircle(parent) {

    let circle = document.createElement("div")
    circle.className = "circle"
    circle.style.backgroundColor = getRandomHexColor()

    parent.appendChild(circle)
    return circle
}

function appendSquare(parent) {
    let square = document.createElement("div")
    square.classList.add("square")
    square.style.backgroundColor = getRandomRGBColor()

    parent.appendChild(square)
    return square
}

export { appendCircle, appendSquare }