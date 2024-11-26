

/*-------------------  Example 1 -----------------*/

/**** Handlers for draggable elements ****/
function dragStartHandler1(e) {
    //console.log('on dragstart')
    let elm = e.target

    e.dataTransfer.setData('text/plain', elm.id)
    e.dataTransfer.effectAllow = 'move'
}

/**** Handlers for dropzone ****/
function dragOverHandler1(e) {
    e.preventDefault()    
    //console.log('on drag over')

    e.dataTransfer.dropEffect = "move"
}

function dropHandler1(e) {
    e.preventDefault()
    //console.log('on drop')

    const id = e.dataTransfer.getData("text/plain")
    const circle = document.getElementById(id)
    console.log(circle)
    e.target.appendChild(circle)
}

function setRandomColor(elm) {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    elm.style.backgroundColor = `rgb(${r},${g},${b})`
    elm.style.opacity = '0.8'
}

/*** Initialize Example 1 elements ***/
function initExample1() {
    let circles = document.querySelectorAll("#example1 .circle")

    for (let i = 0; i < circles.length; i++) {
        let elm = circles[i]
        elm.id = `x${i}`
        setRandomColor(elm)

        elm.addEventListener('dragstart', dragStartHandler1)
    }

    let dropzone = document.querySelector("#example1 .dropzone")
    dropzone.addEventListener('dragover', dragOverHandler1)
    dropzone.addEventListener('drop', dropHandler1)
}

/*-------------------  Example 2 -----------------*/

/**** Handlers for draggable elements ****/
function dragStartHandler2(e) {
    //console.log('on drag start')
    let elm = e.target

    e.dataTransfer.setData("text/plain", elm.innerText)
    e.dataTransfer.effectAllow = "copy"
}

/**** Handlers for dropzone ****/
function dragOverHandler2(e) {
    e.preventDefault()
    //console.log("on drag over")

    e.dataTransfer.dropEffect = "copy"
}

function dropHandler2(e) {
    e.preventDefault()
    //console.log('on drop')

    const data = e.dataTransfer.getData("text/plain")
    const par = document.querySelector("#dropzone-text")

    par.innerText += (" " + data)
}

/*** Initialize Example 1 elements ***/
function initExample2() {
    let listItems = document.querySelectorAll("#example2 li")

    for (let item of listItems) {
        item.addEventListener("dragstart", dragStartHandler2)
    }

    let dropzone = document.querySelector("#example2 .dropzone")
    dropzone.addEventListener("dragover", dragOverHandler2)
    dropzone.addEventListener("drop", dropHandler2)
}

/*-------------------  Example 3 -----------------*/

/**** Handlers for draggable elements ****/
function dragStartHandler3(e) {
    //console.log('on drag start')
    const image = e.target

    const data = {
        id: image.id,
        parent: image.parentNode
    }

    const dataString = JSON.stringify(data)

    e.dataTransfer.setData('text/plain', dataString)
    e.dataTransfer.effectAllow = "move"
}

function dragEndHandler3(e) {
    //console.log('on drag end')

    const elm = e.target
    elm.parentNode.style.backgroundColor = "darkGray"
}

/**** Handlers for dropzone ****/
function dragOverHandler3(e) {
    e.preventDefault()
    //console.log('on drag over')

    e.dataTransfer.dropEffect = "move"
}

function dropHandler3(e) {
    e.preventDefault()
    //console.log('on drop')

    const dataString = e.dataTransfer.getData("text/plain")
    const data = JSON.parse(dataString)

    const image = document.getElementById(data.id)
    e.target.appendChild(image)
}

function initExample3() {
    const image = document.querySelector("#example3 img")
    image.addEventListener("dragstart", dragStartHandler3)
    image.addEventListener("dragend", dragEndHandler3)

    const dropzone = document.querySelector("#example3 .dropzone")
    dropzone.addEventListener("dragover", dragOverHandler3)
    dropzone.addEventListener("drop", dropHandler3)
}

/* Initialize examples after DOM content loaded */

window.addEventListener('DOMContentLoaded', () => {
    initExample1()
    initExample2()
    initExample3()
})

