
function loadPresets() {
    const box = document.querySelector("#box")

    const boxWidth = localStorage.getItem("box-width")
    //console.log(boxWidth)
    const boxHeight = localStorage.getItem("box-height")
    //console.log(boxHeight)

    if (boxWidth) { box.style.width = boxWidth + "px" }
    if (boxHeight) { box.style.height = boxHeight + "px" }
}

loadPresets()

function toggleResizable(elm) {
    elm.classList.toggle('resizable')
}

// "The Observer API allows you to track changes to different aspects of a web page and execute
// a callback function in response." --Frisbie

// Mutation Observer, Resize Observer, and Intersection Observer

const resizeObserver = new ResizeObserver((arr) => {
    console.log("resize event occurred")
    const entry = arr[0]
    //console.log(entry)
    const target = entry.target
    //console.log(target)
    const contentRect = entry.contentRect
    //console.log(contentRect)

    localStorage.setItem('box-width', contentRect.width)
    localStorage.setItem('box-height', contentRect.height)
})

resizeObserver.observe(document.querySelector("#box"), { box: "border-box" })

/* Intersection Observer */
// When observed elements intersect the viewport, handler is triggered

function activateAutoLoad() {
    const intersectionObserver = new IntersectionObserver((arr) => {
        for (let entry of arr) {
            //console.log(entry)

            if (entry.isIntersecting) {
                console.log('button is in view')

                //load more 5 more posts
                for (let i = 0; i < 5; i++) {
                    console.log('loading section')
                    let main = document.querySelector("main")
                    main.insertBefore(document.createElement("section"), main.lastElementChild)
                }
            }
            else {
                console.log('button is out of view')
            }
        }
    }, {
        root: document.querySelector("main"),
        threshold: [0, 1],
        rootMargin: "-40px"
    })

    intersectionObserver.observe(document.querySelector("#autoLoadButton"))  // observe the footer
}

// Mutation Observer

const mutationObserver1 = new MutationObserver((arr) => {
    //console.log('DOM was mutated')

    for (let entry of arr) {
        //console.log(entry)
    }
})

mutationObserver1.observe(document.querySelector("#box"), {
    attributes: true
})

const mutationObserver2 = new MutationObserver((arr) => {
    console.log('DOM was mutated')

    for (let entry of arr) {
        console.log(entry)
        const target = entry.target
        console.log(target)
        
        const count = document.querySelector("#count")
        count.innerText = target.children.length - 1
    }
})

mutationObserver2.observe(document.querySelector("main"), {
    childList: true
})

