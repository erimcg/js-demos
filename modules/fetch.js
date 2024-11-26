export async function fetchText(url) {
    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)
    console.log(response)

    if (response.ok) {
        return await response.text()
    }
    else {
        return response.status
    }
}

export async function fetchObject(url) {
    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)
    console.log(response)

    if (response.ok) {
        return await response.json()
    }
    else {
        return response.status
    }
}

export async function fetchImage(url) {
    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)
    console.log(response)

    if (response.ok) {
        return await response.blob()
    }
    else {
        return response.status
    }
}