export class Numeral {

    #word
    #number

    constructor(word, number) {
        this.#word = word
        this.#number = number
    }

    get word() {
        return this.#word
    }

    get number() {
        return this.#number
    }
}