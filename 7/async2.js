console.log('------ Async 2 ------')

import { printMax, printMin, printSum, printError } from "./print_utils.js"

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //const arr = undefined
            const arr = [...Array(1000).keys()]
        
            if (!arr) {
                reject('no data available')
            }
            resolve(arr)
        }, 3000)
    })
}

let promise = getData()
promise.then(printMin, printError)

getData().then(printMax, printError)

getData().then(printSum).catch(printError)

getData().then(printSum).then(printMax).then(printMin).catch(printError)

console.log('------ Async 2 Complete ------')