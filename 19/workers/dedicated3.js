//console.log("dedicated 3 running...")

let messagePort = null

self.onmessage = ({ ports }) => {
    if (!messagePort) {
        messagePort = ports[0]
        self.onmessage = null

        messagePort.onmessage = ({ data }) => {
            messagePort.postMessage(`${data}! = ${factorial(data)}`)
        }
    }
}

function factorial(n) {
    if (n == 0 || n === 1) {
        return 1
    }
    else {
        return n * factorial(n-1)
    }
}

