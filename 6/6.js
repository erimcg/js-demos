
const main = document.querySelector("main")

function createFlyingBird() {
    let birdImg = document.createElement("img")
    birdImg.id = "flying-bird"
    let url = "./images/flying-bird.gif"
    birdImg.setAttribute("src", url)
    main.appendChild(birdImg)
}

createFlyingBird()

setInterval(createFlyingBird, 2000)

function createSlider() {
    let slider = document.createElement('div')
    slider.setAttribute("id", 'slider')

    let menu = document.createElement('div')
    menu.setAttribute("id", 'menu')

    let link = document.createElement('a')
    link.innerHTML = "Watch Video"
    link.setAttribute("href", "../modules/playvideo.html")
    menu.appendChild(link)

    let cowImg = document.createElement("img")
    let url = "images/cow.png"
    cowImg.setAttribute("src", url)

    slider.appendChild(menu)
    slider.appendChild(cowImg)
    main.appendChild(slider)
}

createSlider()