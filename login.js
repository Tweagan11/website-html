class User {
    onlineStatus;

    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.onlineStatus = false;
    }
}

cleanUsers();

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const newUser = {username:username, password:password};

    let users = [];
    const usersText = localStorage.getItem('users');
    if (usersText) {
        users = JSON.parse(usersText);
    };

    let test = users.find(User => User.username === username)

    
    if (test) {
        alert("You have successfully logged in.");
        location.reload();
    } else if ($("#login-form").value == null) {
        loginErrorMsg.style.opacity = 1;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
       
})

function compareUser(user1, user2) {
    return user1.name === user2.name;
}

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

    let check = users.find(User => User.username === username);

    if (username === "" || password === ""){

        alert("Please Enter a Username and Password");
        location.reload;
    }

    if (check) {
            loginErrorMsg.style.opacity = 1;
            loginErrorMsg.innerHTML = '<p>Already a User</p>';
            found = true;
            }

    if(!found) {
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert("You have successfully signed up!")
        window.location.href = 'index.html'
    }
})

function cleanUsers() {
    
    let users = [];
    const usersText = localStorage.getItem('users');
    if (usersText) {
        users = JSON.parse(usersText);
    }
    updatedUsers=users.filter(elem => elem.username);
    updatedUsers=users.filter(elem => elem.password);

    console.log(updatedUsers);
}