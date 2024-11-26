const dbName = "messages.db"
// the version determines the database schema which defines the 
// structure of the objects stored in the database
const dbVersion = 12
let db = null

export async function openMessagesDatabase() {
    const request = indexedDB.open(dbName, dbVersion)

    request.onupgradeneeded = (e) => {
        console.log("upgradeneeded fired")
        db = e.target.result

        //create object store
        if (db.objectStoreNames.contains("messages")) {
            console.log('removing messages store')
            db.deleteObjectStore("messages")
        }
        
        console.log('creating messages store')
        db.createObjectStore("messages", { autoIncrement: true })
    }

    return new Promise((resolve, reject) => {
        request.onsuccess = (e) => {
            console.log("success opening database")
            db = e.target.result
            console.log(db)
            resolve()
        }

        request.onerror = (e) => {
            console.log("error opening database")
            console.log(e.target.error)
            reject()
        }
    })
}

export async function addMessage(entry) {
    let transaction = db.transaction("messages", "readwrite")
    let store = transaction.objectStore("messages")
    let request = store.add(entry)

    return new Promise((resolve, reject) => {
        request.onsuccess = (e) => {
            console.log("success adding message")
            resolve()
        }
        request.onerror = (e) => {
            console.log("error adding message")
            reject()
        }
    })
}

export async function deleteMessage(key) {
    let transaction = db.transaction("messages", "readwrite")
    let store = transaction.objectStore("messages")
    let request = store.delete(key)

    return new Promise((resolve, reject) => {
        request.onsuccess = (e) => {
            console.log("success deleting message")
            resolve()
        }
        request.onerror = (e) => {
            console.log("error deleting message")
            reject()
        }
    })
}

export async function getMessages() {
    //valid access modes: readonly, readwrite, versionchange
    const transaction = db.transaction("messages", "readwrite")
    const store = transaction.objectStore("messages")

    const messages = []
    const request = store.openCursor()

    return new Promise((resolve, reject) => {
        request.onsuccess = (e) => {
            const cursor = e.target.result

            if (cursor) {
                messages.push({ key: cursor.key, value: cursor.value })

                // cursor.update() can be used to update an entry
                cursor.value.readCount = (cursor.value.readCount ?? 0) + 1
                cursor.update(cursor.value)

                console.log(`key: ${cursor.key}, value: ${JSON.stringify(cursor.value)}`)
                cursor.continue()
            }
            else {
                resolve(messages)
            }
        }
        request.onfailure = (e) => {
            console.log('error getting cursor on store')
            reject()
        }
    })
}

export async function deleteAllMessages() {
    const transaction = db.transaction("messages", "readwrite")
    const store = transaction.objectStore("messages")
    const request = store.openCursor()

    return new Promise((resolve, reject) => {
        request.onsuccess = (e) => {
            const cursor = e.target.result

            if (cursor) {
                cursor.delete()
                cursor.continue()
            }
            else {
                resolve()
            }
        }
        request.onfailure = (e) => {
            console.log('error deleting all messages')
            reject()
        }
    })
}







