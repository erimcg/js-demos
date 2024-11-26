class ScrollablePane extends HTMLElement {

    static observedAttributes = ['title']

    static template = document.createElement("template")

    #title = undefined

    constructor() {
        super()

        this.attachShadow({ mode: "open" })

        let link = document.createElement("link")
        link.href = "../components/scrollable-pane/scrollable-pane.css"
        link.type = "text/css"
        link.rel = "stylesheet"
        this.shadowRoot.append(link)

        ScrollablePane.template.innerHTML = `
            <h1 id='title'></h1>
            <div id='scrollable-container'>
                <slot name="cards"></slot>
            </div>
        `

        let clone = ScrollablePane.template.content.cloneNode(true)
        this.shadowRoot.append(clone)

        this.#title = this.shadowRoot.querySelector('#title')
        this.items = this.shadowRoot.querySelector('slot')  // don't user this.slot
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'title':
                this.#title.innerHTML = newValue
                break
        }
    }

    get title() { return this.getAttribute('title') }
    set title(val) { this.setAttribute('title', val) }
}

customElements.define("scrollable-pane", ScrollablePane)