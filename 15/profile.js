
// If theme is in localStorage, check the correct radio button; otherwise
// check lightTheme

if (localStorage.theme) {
    const theme = localStorage.getItem('theme')
    const radio = document.querySelector(`input[type='radio'][name='theme'][value=${theme}]`)
    radio.checked = true
}

document.querySelectorAll("input[type='radio'][name='theme']").forEach((element) => {

    element.addEventListener("click", (e) => {
        console.log(e.target.value)

        localStorage.setItem("theme", e.target.value)

        loadTheme()
    })
})