function randomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return {r, g, b}
}

export function getRandomHexColor() {
    let { r, g, b } = randomColor()
    
    r = r.toString(16).padStart(2, "0")
    g = g.toString(16).padStart(2, "0")
    b = b.toString(16).padStart(2, "0")

    return `#${r}${g}${b}`
}

export function getRandomRGBColor() {
    let { r, g, b } = randomColor()

    return `rgb(${r},${g},${b})`
}