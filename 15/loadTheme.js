
function loadTheme() {
    const body = document.querySelector("body")

    if (localStorage.getItem('theme')) {
        console.log('theme set')
        const theme = localStorage.getItem("theme")

        switch (theme) {
            case 'light-theme':
                body.classList.remove('dark-theme')
                body.classList.add('light-theme')
                break;
            case 'dark-theme':
                body.classList.remove('light-theme')
                body.classList.add('dark-theme')
                break;
        }
    } else {
        body.classList.add('light-theme')
    }
}

loadTheme()



