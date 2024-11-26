console.log('------ Synch 2 ------')

import { printMax, printMin, printSum, printError } from './print_utils.js'

function getData(onSuccess, onError) {
    //const arr = undefined
    const arr = [...Array(1000).keys()]

    if (!arr) {
        return onError("no data available")
    }
    onSuccess(arr)
}

getData(printSum, printError)
getData(printMin, printError)

console.log('------ Synch 2 Complete ------')





