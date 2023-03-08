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

    let users = [];
    const usersText = localStorage.getItem('users');
    if (usersText) {
        users = JSON.parse(usersText);
    }

    for(i = 0; i < users.length; i++) {
        if (username === users.username && password === users.password) {
            alert("You have successfully logged in.");
            location.reload();
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    }
})

const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();

    const username = signupForm.newUsername.value;
    const password = signupForm.newPassword.value;
    const newUser = new User (username, password);

    let users = [];
    const usersText = localStorage.getItem('users');
    if (usersText) {
        users = JSON.parse(usersText);
    }

    let found = false;

    for (i = 0 ; i < users.length; i++) {
        if (username === users.username) {
            loginErrorMsg.style.opacity = 1;
            loginErrorMsg.innerHTML = '<p>Already a User</p>';
            found = true;
            break;
            }
        }

    if (!found) {
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        location.reload();
    }
})
