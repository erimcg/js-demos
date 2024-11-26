import { openMessagesDatabase, getMessages, addMessage, deleteMessage, deleteAllMessages } from "./db.js";

await openMessagesDatabase()

async function loadMessages() {
    console.log('getting messages')
    let data = await getMessages()

    let messagesContainer = document.querySelector("#messages")
    let messages = document.querySelectorAll(".message")
    for (let node of messages) {
        node.parentNode.removeChild(node);
    }

    let button = document.querySelector("#deleteAllButton")
    if (data.length == 0) {
        button.style.visibility = "hidden"
        return
    }
    
    button.style.visibility = "visible"

    for (let item of data) {
        let container = document.createElement('div')
        container.classList.add("message")
        container.dataset.key = item.key

        let username = document.createElement('span')
        username.innerText = item.value.username
        username.classList.add("username")

        let count = document.createElement('span')
        count.innerText = item.value.readCount
        count.classList.add('count')

        let text = document.createElement('div')
        text.innerHTML = item.value.text
        text.classList.add('text')

        container.appendChild(username)
        container.appendChild(count)
        container.appendChild(text)
    
        container.addEventListener("click", async (e) => {
            e.stopPropagation()
            let elm = e.currentTarget
            await deleteMessage(+elm.dataset.key)
            loadMessages()
        }, true)

        //messagesContainer.appendChild(container)
        messagesContainer.insertBefore(container, messagesContainer.lastElementChild)
    }
}

await loadMessages()

let messageBox = document.querySelector("#newMessage")

messageBox.addEventListener("input", (e) => {
    let textarea = e.target
    textarea.style.height = "";
    textarea.style.height = textarea.scrollHeight + "px"
})

messageBox.addEventListener("keydown", async (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
    
        await addMessage({
            username: "joe123",
            text: e.target.value
        })

        let textarea = e.target
        textarea.value = ""
        textarea.style.height = "";
        textarea.style.height = textarea.scrollHeight + "px"

        loadMessages()
    }
})

let deleteAllButton = document.querySelector("#deleteAllButton")

deleteAllButton.addEventListener("click", (e) => {
    deleteAllMessages()
    loadMessages()
})
