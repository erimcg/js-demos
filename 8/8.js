import { fetchImage, fetchObject, fetchText } from "../modules/fetch.js";

/*** Get path of current web page ***/

const loc = location
console.log(loc)
const path = loc.pathname.substring(0, loc.pathname.lastIndexOf("/"))
console.log(path)

/** Get text from file **/
let text = await fetchText(`${path}/data/label.txt`) 
console.log(text)

document.querySelector("#label").innerText = text

/** Get object from file **/

let obj = await fetchObject(`${path}/data/records.json`)
console.log(obj)

document.querySelector("#artist").innerText = obj.artist

let listItems = ""
for (let elm of obj.records) {
    listItems += `<li>${elm.title}, ${elm.year}</li>`
}
document.querySelector("#records").innerHTML = listItems

/** Get Image from file */

let blob = await fetchImage(`${path}/data/mouse.png`)
console.log(blob)

document.querySelector("#mouse").src = URL.createObjectURL(blob)