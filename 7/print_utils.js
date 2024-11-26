export function printMax(data) {
    let max = data[0]
    for (let val of data) {
        if (val > max) {
            max = val
        }
    }
    console.log("max: " + max)
    return data
}

export function printMin(data) {
    let min = data[0]
    for (let val of data) {
        if (val < min) {
            min = val
        }
    }
    console.log("min: " + min)
    return data
}

export function printSum(data) {
    let sum = 0
    for (let val of data) {
        sum += val
    }
    console.log("sum: " + sum)
    return data
}

export function printError(mssg) {
    console.log('[' + mssg + ']')
}

export async function sleep(ms) {
    await new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}