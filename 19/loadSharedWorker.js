
const worker4 = new SharedWorker('./workers/shared.js')
//console.log(worker4)

// port is automatically started by attaching listener
worker4.port.onmessage = ({ data }) => {
    // Received response from shared Worker
    //console.log(data)

    // add the footer content
    let footer = document.querySelector('footer')
    footer.innerHTML = data
}

setTimeout(() => {
    console.log('sending message to worker')
    worker4.port.postMessage(location.href)
}, 1000)



