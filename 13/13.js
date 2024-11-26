/* Chapter 15: Events
    Event flow describes the order in which events are received by handlers on the page.

    DOM Level 2 specification for event handling includes 3 phases: event capturing phase, target handling, and the event bubbling phase.

    Capturing phase moves from the window, to the document, to <html>, <body>, etc. down to the target

    Event bubbling phase start a the target and flows upward toward the most general node (window)
*/

async function sleep(ms) {
    await new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

let circle = document.querySelector("#circle")
let box = document.querySelector("#box")
let section = document.querySelector("#section")
let main = document.querySelector("#main")
let body = document.querySelector("#body")
let html = document.querySelector("html")

let elements = ['body', 'main', 'section', 'box', 'circle']

function removeEventListeners(handler, capture) {
    circle.removeEventListener("click", handler, capture)
    box.removeEventListener("click", handler, capture)
    section.removeEventListener("click", handler, capture)
    main.removeEventListener("click", handler, capture)
    body.removeEventListener("click", handler, capture)
}

function addEventListeners(handler, capture) {
    circle.addEventListener("click", handler, capture)
    box.addEventListener("click", handler, capture)
    section.addEventListener("click", handler, capture)
    main.addEventListener("click", handler, capture)
    body.addEventListener("click", handler, capture)
}

let captureButton = document.querySelector("#capture")
captureButton.addEventListener('click', (e) => {
    e.stopPropagation()

    removeEventListeners(bubbleHandler, false)
    addEventListeners(captureHandler, true)
    document.querySelector("#phase").innerText = "Capture Phase"
})

let bubblingButton = document.querySelector("#bubble")
bubblingButton.addEventListener('click', (e) => {
    e.stopPropagation()

    removeEventListeners(captureHandler, true)
    addEventListeners(bubbleHandler, false)
    document.querySelector("#phase").innerText = "Bubble Phase"
})

async function bubbleHandler(e) {
    e.stopPropagation()

    //console.log(e.currentTarget)

    let elm = e.currentTarget
    console.log(elm.id + " clicked")

    elm.classList.toggle(`${elm.id}-hit`)
    await sleep(750)
    elm.classList.toggle(`${elm.id}-hit`)

    let nextElement = elm.parentNode
    let newEvent = new Event('click')
    nextElement.dispatchEvent(newEvent)

    let intervalId = shake(elm)
    await sleep(2000)
    clearInterval(intervalId)

    if (elm.id === 'body') {
        removeEventListeners(bubbleHandler, false)
        document.querySelector("#phase").innerText = ""
    }
}

async function captureHandler(e) {
    //console.log(e.currentTarget)
    if (e.target.id === 'bubble') {
        return
    }

    let elm = e.currentTarget
    console.log(elm.id + " clicked")

    let index = elements.indexOf(elm.id)
    await sleep(750 * index)

    elm.classList.toggle(`${elm.id}-hit`)
    await sleep(750)
    elm.classList.toggle(`${elm.id}-hit`)

    let intervalId = shake(elm)
    await sleep(2000)
    clearInterval(intervalId)

    if (e.target.id === elm.id) {
        removeEventListeners(captureHandler, true)
        document.querySelector("#phase").innerText = ""
    }
}

function shake(elm) {
    return setInterval((elm) => {
        let direction = Math.floor(Math.random() * 4)

        switch (direction) {
            case 0:
                elm.style.top = +window.getComputedStyle(elm).getPropertyValue("top").slice(0, -2) - 1 + "px"
                break;
            case 1:
                elm.style.left = parseInt(window.getComputedStyle(elm).getPropertyValue("left").slice(0, -2)) + 1 + "px"
                break;
            case 2:
                elm.style.top = +window.getComputedStyle(elm).getPropertyValue("top").slice(0, -2) + 1 + "px"
                break;
            case 3:
                elm.style.left = parseInt(window.getComputedStyle(elm).getPropertyValue("left").slice(0, -2)) - 1 + "px"
                break;
        }
    }, 50, elm)
}
