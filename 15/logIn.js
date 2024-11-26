
// If someone navigates to login screen and is already logged in, then redirect them
// to their last page
if (localStorage.getItem('username')) {
    history.back()
}

/*** User is not logged in ***/

document.querySelector('#logInButton').addEventListener('click', () => {
    // TODO: Get the data from the form


    // TODO: Verify that all of the fields have valid input.  If not inform the user of
    // what is missing and then return from this function so the code below is not executed.



    // We'll pretend we sent the user data with a fetch call to a server and the response came back
    // with a valid status code

    // TODO: Store the username from the form in localStorage

        /*** REPLACE THIS ***/
        localStorage.setItem("username", "Joe")
    

    // Redirect the user to the home page
    location.href = 'home.html'
})