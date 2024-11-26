class AlbumCard extends HTMLElement {

    static observedAttributes = ['date', 'title']

    static template = document.createElement("template")

    #title = undefined
    #date = undefined

    constructor() {
        super()

        this.attachShadow({ mode: "open" })

        let link = document.createElement("link")
        link.href = "../components/album-card/album-card.css"
        link.type = "text/css"
        link.rel = "stylesheet"
        this.shadowRoot.append(link)

        AlbumCard.template.innerHTML = `
            <div id='container'>
                <span id='date'></span> <br>
                <span id='title'></span>
            </div>
        `

        let clone = AlbumCard.template.content.cloneNode(true)
        this.shadowRoot.append(clone)

        this.#title = this.shadowRoot.querySelector('#title')
        this.#date = this.shadowRoot.querySelector('#date')
    }

    setData(data) {
        this.#title.innerHTML = data.title
        this.#date.innerHTML = data.date
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name)
        switch (name) {
            case 'date':
                this.#date.innerHTML = newValue
                break
            case 'title':
                this.#title.innerHTML = newValue
                break
        }
    }

    get date() { console.log('test'); return this.getAttribute('date') }
    set date(val) { this.setAttribute('date', val) }

    get title() { return this.getAttribute('title') }
    set title(val) { this.setAttribute('title', val) }
}

customElements.define("album-card", AlbumCard)