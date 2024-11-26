class FramedImage3 extends HTMLElement {

    static observedAttributes = ['title', 'src']

    static template = document.createElement("template")

    constructor() {
        super()

        this.attachShadow({ mode: "open" })

        let link = document.createElement("link")
        link.href = "../components/framed-image/framed-image3.css"
        link.type = "text/css"
        link.rel = "stylesheet"
        this.shadowRoot.append(link)

        FramedImage3.template.innerHTML = `
            <slot name="heading"></slot>
            <slot name="image"></slot>
        `
        let clone = FramedImage3.template.content.cloneNode(true)
        this.shadowRoot.append(clone)

        this.headingSlot = this.shadowRoot.querySelector('slot[name="heading"]')
        this.imageSlot = this.shadowRoot.querySelector('slot[name="image"]')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'title':
                this.headingSlot.assignedElements()[0].innerHTML = newValue
                break

            case 'src':
                this.imageSlot.assignedElements()[0].src = newValue
                break
        }
    }

    get title() { return this.getAttribute('title') }
    set title(val) { this.setAttribute('title', val) }

    get src() { return this.getAttribute('src') }
    set src(val) { this.setAttribute('src', val) }

}

customElements.define("framed-image3", FramedImage3)