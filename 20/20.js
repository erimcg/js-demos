console.log("20.js running")

const worker = new SharedWorker('./workers/shared.js')

console.log(worker)

worker.onerror = (e) => {
    console.log("error connecting shared worker...")

}

worker.addEventListener('message', (e) => {
    console.log('host received: ' + e.data)
})

const channel = new MessageChannel();
//worker.postMessage(null, [channel.port1])