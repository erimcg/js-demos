
let sum = undefined;

let add = function () {
    const input1 = document.querySelector("#firstInteger")

    const value1 = input1.value
    console.log(typeof (value1))
    
    const input2 = document.querySelector("#secondInteger")

    const value2 = input2.value

    //let sum = value1 + value2  // error - string concatenation
    
    //let sum = parseInt(value1) + parseInt(value2)
    //let sum = Number(value1) + Number(value2)
    sum = +value1 + +value2

    const result = document.getElementById("result")
    result.value = sum

    setSummary()
}

let setSummary = function () {
    const checkbox = document.querySelector("#displaySummary")
    const cbValue = checkbox.checked

    let summary = document.querySelector("#summary")
    summary.style.display = 'block';

    summary.innerHTML =
    `<h1>Sum</h1>
     <span>${sum}</span>`
}

function toggleSummary() {
    const checkbox = document.querySelector("#displaySummary")
    const cbValue = checkbox.checked

    if (cbValue === true) {
        setSummary()
    }
    else {
        let summary = document.querySelector("#summary")
        summary.style.display = 'none';
    }
}

// register event handler for button
const button = document.querySelector("#computeSumButton")
button.addEventListener("click", add)

const checkBox = document.querySelector("#displaySummary")
checkBox.addEventListener('click', toggleSummary)
