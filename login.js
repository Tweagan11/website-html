class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = signupForm.newUsername.value;
    const password = signupForm.newPassword.value;

    fetch(users.json)
    




})