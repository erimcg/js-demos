import {printMax, printSum, printError} from "./print-util.js"

// uncomment one of the two lines below to test
const arr = undefined
//const arr = [...Array(1000).keys()]

if (arr) {
    printSum(arr)
} else {
    printError("no data available")
}

if (arr) {
    printMax(arr)
} else {
    printError("no data available")
}

console.log("all done")