import {printSum, printMin, printMax, printError, sleep} from "./print-util.js"

async function getData () {
    await sleep(4000)

    //const arr = undefined
    const arr = [...Array(1000).keys()]

    if (!arr) {
        throw new Error("no data available")
    }
    return arr
}

getData().then(printSum).then(printMax).then(printMin).catch(printError)

console.log("all done")