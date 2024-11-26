console.log("worker2 started")

let arr = undefined
let counter = 0;

self.addEventListener('message', (e) => {
    console.log('worker2: received message')
    console.log(e.data)

    if (!arr) {
        console.log('setting view')
        arr = new Uint8Array(e.data)

        setInterval(() => {
            arr[0] += 1

            self.postMessage(null)
        }, 2000)
    }
})