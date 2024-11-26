console.log("worker started")
console.log(self)

let counter = 1

setInterval(() => {
    // do something periodically and send back result to main thread
    console.info("worker: sending message")

    self.postMessage(`(${counter}) Data from worker`)
    counter++

}, 5000)

self.addEventListener('message', (e) => {
    console.log('worker: received message')
    console.log(e.data)

    if (e.data === 'ME_NEED_MORE_DATA') {
        fetch_data()
    } 
})

function fetch_data() {
    //simulate data fetched from external server

    self.postMessage(`(${counter}) Requested Data`)
    counter++
}


setInterval(() => {
    self.postMessage("TERMINATING_SELF")
    self.close()
}, 20000)

