console.log('------ Async 1 ------')

import { printMin, printMax, printSum, printError } from './print_utils.js'

function getData(onSuccess, onError) {
    setTimeout(() => {
        //const arr = undefined
        const arr = [...Array(1000).keys()]

        if (!arr) {
            return onError('no data available')
        }
        onSuccess(arr)
    }, 3000)
}

getData(printSum, printError)
getData(printMax, printError)

console.log('------ Async 1 Complete ------')



