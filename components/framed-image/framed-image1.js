class FramedImage1 extends HTMLElement {

    static observedAttributes = ['title', 'src']
    
    static template = document.createElement('template')

    constructor() {
        super()

        this.attachShadow({ mode: "open" })
        console.log(this)

        let link = document.createElement('link')
        link.href = "../components/framed-image/framed-image1.css"
        link.type = "text/css"
        link.rel = "stylesheet"
        this.shadowRoot.append(link)

        FramedImage1.template.innerHTML = `
            <h3></h3>
            <img></img>
        `
        let clone = FramedImage1.template.content.cloneNode(true)
        this.shadowRoot.append(clone)

        this.heading = this.shadowRoot.querySelector('h3')
        this.image = this.shadowRoot.querySelector('img')
        console.log(this.image)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'title':
                this.heading.innerHTML = newValue
                break
            case 'src':
                this.image.src = newValue
                break
        }
    }

    get title() { return this.getAttribute('title') }
    set title(val) { this.setAttribute('title', val)}

    get src() { return this.getAttribute('src') }
    set src(val) { this.setAttribute('src', val)}
}

customElements.define('framed-image1', FramedImage1)