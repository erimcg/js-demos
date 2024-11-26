
// If a user is not logged in, isplay the log in and create account buttons;
// otherwise display the log out and profile buttons in the header

if (localStorage.getItem("username")) {
    document.querySelector("#logInHeading").style.display = 'none'
    document.querySelector("#logOutHeading").style.display = 'flex'
}
else {
    document.querySelector("#logInHeading").style.display = 'flex'
    document.querySelector("#logOutHeading").style.display = 'none'
}


function logOut() {
    localStorage.clear()

    //Reload the page
    location.reload()
}


