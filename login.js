class User {
    onlineStatus;

    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.onlineStatus = false;
    }


}

const users = [];

cleanUsers();

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    let users = [];
    const usersText = localStorage.getItem('Users');
    if (usersText) {
        users = JSON.parse(usersText);
    };

    let test = users.find(User => User.username === username)

    if (test) {
        alert("You have successfully logged in.");
        for(let status of Object.keys(users)) {
            if(typeof User[status] == false && test.username) {
                test.onlineStatus = true;
            };
        }
        location.reload();
        cleanUsers();

    } else if (username === "" || password === "") {
        loginErrorMsg.style.opacity = 1;
            loginErrorMsg.innerHTML = '<p>Please enter a Username and Password</p>';
            
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
    const newUser = new User (username, password, onlineStatus = true);

    let users = [];
    const usersText = localStorage.getItem('Users');
    if (usersText) {
        users = JSON.parse(usersText);
    }

    let found = false;

    let check = users.find(User => User.username === username);

    if (username === "" || password === ""){

        loginErrorMsg.style.opacity = 1;
            loginErrorMsg.innerHTML = '<p>Please enter a Username and Password</p>';
        location.reload;
        found = true;
    }

    if (check) {
            loginErrorMsg.style.opacity = 1;
            loginErrorMsg.innerHTML = '<p>Already a User</p>';
            found = true;
            }

    if(!found) {
        users.push(newUser);
        localStorage.setItem('Users', JSON.stringify(users));

        alert("You have successfully signed up!")
        window.location.href = 'index.html'
    }
})

function cleanUsers() {
    
    let users = [];
    const usersText = localStorage.getItem('Users');
    if (usersText) {
        users = JSON.parse(usersText);
    }
    updatedUsers=users.filter(elem => elem.username);
    updatedUsers=users.filter(elem => elem.password);

    users = updatedUsers;

    localStorage.setItem('Users', JSON.stringify(users));
}