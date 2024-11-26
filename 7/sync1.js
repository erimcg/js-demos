console.log('------ Synch 1 ------')

import { printMax, printMin, printSum, printError } from "./print_utils.js"

//const arr = undefined
const arr = [...Array(1000).keys()]

if (arr) {
    printSum(arr)
} else {
    printError('no data available')
}

if (arr) {
    printMax(arr)
} else {
    printError('no data available')
}

console.log('------ Synch 1 Complete ------')