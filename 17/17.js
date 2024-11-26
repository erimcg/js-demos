// Redirect and use https protocol
console.log(location)
if (location.protocol != "https:") {
    console.log(location.protocol)
    location.protocol = "https:"
}

// Get geolocation 
console.log('loaded')

navigator.geolocation.getCurrentPosition((position) => {
    console.log("getting geolocation position")
    console.log(position)

    const latSpan = document.getElementById("lat")
    latSpan.innerText = position.coords.latitude
    const lngSpan = document.getElementById("lng")
    lngSpan.innerText = position.coords.longitude

}, (positionError) => {
    console.log(positionError)
    const locErrorSpan = document.getElementById("locationError")
    locErrorSpan.innerText = positionError.message
})

// Deprecated navigator properties - "use caution when relying on them" - Frisbie
console.log(navigator.userAgent)
console.log(navigator.vendor)
console.log(navigator.platform)

// Screen properties
console.log(screen)
console.log('colorDepth: ' + screen.colorDepth)  // # bits for color
console.log('pixelDepth: ' + screen.pixelDepth)  
console.log('width: ' + screen.width)
console.log('height: ' + screen.height)
console.log('orientation: ' + screen.orientation.type)
console.log('angle: ' + screen.orientation.angle)

// Network connection
const connectionStateChange = () => {
    let state = (navigator.onLine) ? "online" : "offline"
    console.log('Connection state changed: ' + state)
}

window.addEventListener('online', connectionStateChange)
window.addEventListener('offline', connectionStateChange)

//console.log(navigator.connection) // MDN - limited availability

// Battery status
//navigator.getBattery().then((b) => console.log(b))  // MDN - limited availability

// Hardware
console.log("# cores: " + navigator.hardwareConcurrency)
console.log("memory: " + navigator.deviceMemory)  // MDN - limited availability
console.log("# touch contacts: " + navigator.maxTouchPoints)

// Notifications
// Permission is granted by user per domain.  If user denies, browser remembers
// and there is no redress. - Frisbie ??? clear cache ???

// Notification prompting can only be done from a user gesture

function allowNotifications() {
    Notification.requestPermission().then((permission) => {
        console.log("Notification permission: " + permission)
    })
}

function sendNotification() {
    const n = new Notification("Urgent Message", {
        body: 'You are wonderful!'  // many other options
    })

    n.onshow = () => console.log('notification shown')
    n.onclick = () => console.log('notification clicked')
    n.onclose = () => console.log('notificaiton closed')
    n.onerror = () => console.log("notification error")
}

// Page visibility
console.log('visibility state: ' + document.visibilityState)
console.log('page hidden: ' + document.hidden)

document.addEventListener('visibilitychange', (e) => {
    console.log('visibility changed (hidden): ' + document.hidden)
})

// Page performance
console.log(window.performance)

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function computeDuration() {
    let t0 = Date.now()
    console.log('t0: ' + t0)
    await sleep(500)
    let t1 = Date.now()
    console.log('t1: ' + t1)
    let duration = t1 - t0
    console.log(duration)

    console.log(window.performance)
    t0 = window.performance.now()   // relative to when page opened or worker created
    console.log('t0: ' + t0)        // suppose to display decimal value
    await sleep(500)
    t1 = window.performance.now()
    console.log('t1: ' + t1)
    duration = t1 - t0
    console.log(duration)
}

computeDuration()


