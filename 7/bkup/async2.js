import {printMax, printMin, printSum, printError} from "./print-util.js"
/* getData() returns a Promise.
    The Promise is “pending” until either resolve() or reject() is called.
    If resolve() is called we say the Promise has been “fulfilled”,
    if reject() is called we say it was “rejected”.
 */

function getData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //const arr = undefined
            const arr = [...Array(1000).keys()]

            if (!arr) {
                return reject("no data available")
            }
            resolve(arr)
        }, 3000)
    })
}

/* If resolve() is eventually executed the then() method executes printSum
    passing to it arr, otherwise the catch() method executes printError
    passing to it the error message.
*/

let promise = getData()
console.log(promise)

promise.then(printSum, printError)

getData().then(printMax, printError)

getData().then(printMin).catch(printError)

// uncomment return statements in print-util functions
//getData().then(printSum).then(printMax).then(printMin).catch(printError)

console.log("all done")