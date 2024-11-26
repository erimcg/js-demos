let image1 = document.querySelector('framed-image1')
let image2 = document.querySelector('framed-image2')
let image3 = document.querySelector('framed-image3')

let images = [ image1, image2, image3 ]
let animals = ['bear', 'seal', 'leopard', 'wolf', 'mouse', 'bunny', 'monkey']

let id = setInterval(() => {

    let image = images[Math.floor(Math.random() * 3)]
    let name = animals[Math.floor(Math.random() * 7)]
    
    image.title = name.charAt(0).toUpperCase() + name.slice(1)
    image.src = `../images/${name}.png`

    if (image1.title === image2.title && image1.title === image3.title) {
        clearInterval(id)
        document.querySelector('main').style.backgroundColor = 'black'
    }
    
}, 200)