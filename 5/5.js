let cricket = document.createElement("img")
cricket.src = "./images/cricket.png"

let main = document.querySelector("main")
main.appendChild(cricket)

let boot = document.createElement("img")
boot.src = "./images/rainboot.png"

main.appendChild(boot)

function moveToRandomLocation(elm) {
    //let mainWidth = +(window.getComputedStyle(main).getPropertyValue('width').match(/\+d/))
    let mainWidth = main.getBoundingClientRect().width
    let mainHeight = main.getBoundingClientRect().height

    let numCols = Math.floor(mainWidth / 100)
    let numRows = Math.floor(mainHeight / 100)
    
    let col = Math.floor(Math.random() * numCols)
    let row = Math.floor(Math.random() * numRows)

    elm.style.left = (col * 100) + "px"
    elm.style.top = (row * 100) + "px"
}

moveToRandomLocation(cricket)

let collision = new CustomEvent("collision")

let collisionWithCricket = function () {
    let cricketTop = cricket.offsetTop
    let cricketLeft = cricket.offsetLeft

    let bootTop = boot.offsetTop
    let bootLeft = boot.offsetLeft

    if (cricketTop == bootTop && cricketLeft == bootLeft) {
        return true
    }

    return false
}

let keyDown = function (event) {
    let key = event.keyCode

    //let bootTop = +(window.getComputedStyle(boot).getPropertyValue('top').match(/\+d/))
    let bootTop = +boot.offsetTop
    console.log(window.getComputedStyle(boot))

    //let bootLeft = +(window.getComputedStyle(boot).getPropertyValue('left').match(/\+d/))
    let bootLeft = +boot.offsetLeft
    console.log(bootTop + ":" + bootLeft)

    if (key == 37) {
        bootLeft -= 100;
    }
    else if (key == 38) {
        bootTop -= 100;
    }
    else if (key == 39) {
        bootLeft += 100;
    }
    else if (key == 40) {
        bootTop += 100;
    }

    boot.style.left = bootLeft + "px"
    boot.style.top = bootTop + "px"

    if (collisionWithCricket()) {
        console.log("dispatching event")
        document.dispatchEvent(collision)
    }
}

console.log("keyDown: " + typeof(keyDown))

document.body.addEventListener('keydown', keyDown)

document.addEventListener("collision", () => {
    moveToRandomLocation(cricket)
})