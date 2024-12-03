/*
Web Workers do not have access to the DOM, can share SharedArrayBuffer.
Workers work in separate thread from main browser thread.

3 types of Web Workers
- dedicated web worker: are backgrounds script run from a single web page
- shared web workers: can be accessed by multiple pages' scripts from same 
    origin as page that spawned it.
- service workers: acts as network request arbiter capable of intercepting,
    redirecting and modify requests dispatched by the page

Workers don't have access to a Window object, but have access to 
a subclass of WorkerGlobalScope.  Each instance is accessed
via an object named self. self contains a subset of Window's properties.

*/

const worker = new Worker('./workers/dedicated.js')

worker.addEventListener('error', (e) => {
    console.log("page: worker dispatched error event")
})

worker.addEventListener('messageerror', (e) => {
    console.log("page: worker sent message but messange can't be deserialized")
})

// button handler
function postMessage() {
    console.log('page: sending message to worker')
    worker.postMessage('ME_NEED_MORE_DATA')
}

// button handler
function haltWorker() {
    console.log("page: shutting down worker");
    worker.terminate()
}

worker.addEventListener('message', (e) => {
    switch (e.data) {
        case 'TERMINATING':
            console.log('page: received termination message from worker')
            break;
        default:
            //console.log("page: received data from worker")
            //console.log(e.data)

            const section = document.querySelector('#messages')
            const elm = document.createElement('div')
            elm.innerText = e.data
            section.appendChild(elm)
    }
})

document.addEventListener('visibilitychange', (e) => {
    // we can terminate the worker e.g. when the user navigates to another page
    if (document.visibilityState == 'hidden') {
        //console.log("page: shutting down worker");
        //worker.terminate()
    }
})

/*** Example with SharedArrayBuffer ***/

//if (typeof SharedArrayBuffer !== 'undefined') {
console.log(window.crossOriginIsolated)
console.log(typeof SharedArrayBuffer)

window.addEventListener('load', () => {
    console.log("window loaded")
    console.log(window.crossOriginIsolated)
})

if (window.crossOriginIsolated) {
    const worker2 = new Worker('./workers/dedicated2.js')
    const sharedArray = new SharedArrayBuffer(1)
    const view = new Uint8Array(sharedArray)

    view[0] = 1;
    const counter = document.querySelector("#counter")

    worker2.addEventListener('message', (e) => {
        //Recvd message from worker2 indicating worker has added data to shared buffer
        // Copy data in sharedbuffer to screen
        counter.innerText = view[0]
    })

    // share sharedArray with worker thread
    worker2.postMessage(sharedArray)
}


/**** Example with MessageChannel  *****/

    let channel = new MessageChannel();
    const worker3 = new Worker('./workers/dedicated3.js')

    worker3.postMessage(null, [channel.port2])

    channel.port1.onmessage = (e) => {
        // Received response from worker 3

        let span = document.querySelector('#result')
        span.innerText = e.data
    }

    // button handler
    const button = document.querySelector('#w3Button')

    button.addEventListener('click', () => {
        let value = document.querySelector("input").value
        if (!isFinite(+value)) {
            return
        }

        // send input value to worker
        channel.port1.postMessage(value)
    })





