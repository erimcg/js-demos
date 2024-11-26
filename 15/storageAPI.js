// Web Storage

// localStorage stays intact through page loads
console.log(localStorage)

// sessionStorage is deleted when the page closes
console.log(sessionStorage)

// Mozilla docs recommend using Web Storage API for security reasons
// setItem, getItem, removeItem, clear

function testStorageAPI() {

    localStorage.setItem("username", "erimcg")
    localStorage["role"] = "administrator"
    localStorage.theme = "dark"

    logLocalStorageItems()

    let name = localStorage.getItem("username")
    let role = localStorage["role"]
    let theme = localStorage.theme

    logLocalStorageItems()

    // remove an item
    localStorage.removeItem("username")
    console.log("username: " + localStorage.getItem("username"))

    logLocalStorageItems()

    localStorage.clear();

    logLocalStorageItems()
}

function logLocalStorageItems() {
    // log all own property keys
    console.log(Object.keys(localStorage))

    // log all key/value pairs
    for (let key of Object.keys(localStorage)) {
        console.log(key + ": " + localStorage.getItem(key))
    }
}

testStorageAPI()








