import {printMax, printSum, printError} from './print-util.js'

function getData(onSuccess, onError) {
    //const arr = undefined
    const arr = [...Array(1000).keys()]

    if (!arr) {
        return onError("no data available")
    }

    onSuccess(arr)
}

// We pass two callback functions to getData.
// One for onSuccess, one for onError.

getData(printSum, printError)
getData(printMax, printError)

console.log("all done")