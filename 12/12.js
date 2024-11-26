import { data } from "./data.js"
console.log(data)

let albumList = document.querySelector('#album-list')
albumList.title = data.artist

for (let record of data.records) {
    let card = document.createElement('album-card')
    card.setData(record)

    albumList.items.appendChild(card)  // add them to shadowDOM's slot
}