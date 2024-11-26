class FramedImage2 extends HTMLElement {

    static observedAttributes = ['title', 'src']

    static template = document.createElement("template")

    constructor() {
        super()

        this.attachShadow({ mode: "open" })

        let link = document.createElement("link")
        link.href = "../components/framed-image/framed-image2.css"
        link.type = "text/css"
        link.rel = "stylesheet"
        this.shadowRoot.append(link)

        FramedImage2.template.innerHTML = `
            <h3></h3>
            <slot></slot>
        `

        let clone = FramedImage2.template.content.cloneNode(true)
        this.shadowRoot.append(clone)

        this.heading = this.shadowRoot.querySelector('h3')
        this.imageSlot = this.shadowRoot.querySelector('slot')  // don't user this.slot - took 1 hour to figure this out
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'title':
                this.heading.innerHTML = newValue
                break

            case 'src':
                let img = this.imageSlot.assignedElements()[0].src = newValue
                break
        }
    }

    get title() { return this.getAttribute('title') }
    set title(val) { this.setAttribute('title', val)}

    get src() { return this.getAttribute('src') }
    set src(val) { this.setAttribute('src', val) }
}

customElements.define("framed-image2", FramedImage2)