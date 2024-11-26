console.log('------ Async 3 ------')

import { printSum, printMin, printMax, printError, sleep } from './print_utils.js'

async function getData() {
    await sleep(3000)
    //const arr = undefined
    const arr = [...Array(1000).keys()]

    if (!arr) {
        throw new Error('no data available')
    }
    return (arr)
}

getData().then(printSum).then(printMax).then(printMin).catch(printError)

console.log('------ Async 3 Complete ------')