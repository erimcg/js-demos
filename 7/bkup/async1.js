import {printMax, printSum, printError} from "./print-util.js"

function getData(onSuccess, onError){
    setTimeout(() => {
        //const arr = undefined
        const arr = [...Array(1000).keys()]

        if (!arr) {
            return onError("no data available")
        }
        onSuccess(arr)

    }, 4000)
}

getData(printSum, printError)
getData(printMax, printError)

console.log("all done")