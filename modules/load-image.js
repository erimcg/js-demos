async function asyncLoadImage(url) {
    const options = {
        method: "GET"
    }

    let response = await fetch(url, options)

    if (response.status === 200) {
        const imageBlog = await response.blob()
        const imageObjectURL = URL.createObjectURL(imageBlog)

        const imgElm = document.createElement('img')
        imgElm.src = imageObjectURL

        return imgElm
    }
    else {
        console.log("HTTP-Error: " + response.status)
    }
}

export { asyncLoadImage }