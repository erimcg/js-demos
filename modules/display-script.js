async function displayScript(srcFile, destNode) {

    const response = await fetch(srcFile)

    if (response.status === 200) {
        const blob = await response.blob()
        let text = await blob.text()
        destNode.innerText += text
    }

}

export {displayScript}