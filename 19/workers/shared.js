let numConnections = 0

self.onconnect = (e) => {
    console.log(`connected ${++numConnections} times`)

    // send message to page that connected to worker
    e.ports[0].postMessage(`
            <div class='footer'>
                <span>
                    Produced by the shared worker
                    &copy; 2024, n0code.net
                </span>
            </div>
        `)

    // set up handler for receiving messages on the port
    e.ports[0].onmessage = (e) => {
        console.log(`received message: ${e.data}`)
    }
}
