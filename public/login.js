(async () => {
    let online = false;
    const username = localStorage.getItem('username');
    if (username) {
        const nameEl = document.querySelector('#login-form');
        nameEl.value = username;
        const user = await getUser(nameEl.value);
        online = user?.online;
    }

    if (online) {
        document.querySelector('#login-icon').textContent = username;
        setDisplay('signup-header', 'none');
        setDisplay('login-header', 'none');
        setDisplay('logout', 'block');
    } else {
        setDisplay('signup-form', 'block');
        setDisplay('login-form', 'block');
        setDisplay('logout', 'none');
    } 
})();

async function loginUser() {
    loginOrCreate(`/api/auth/login`);
}
  
async function createUser() {
    loginOrCreate(`/api/auth/create`);
}
  
async function loginOrCreate(endpoint) {
    const loginForm = document.getElementById("login-form");
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if(!username) {
        const loginForm = document.getElementById("signup-form");
        username = loginForm.username.value;
        password = loginForm.password.value;
    }
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: username, password: password, admin: false }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const body = await response.json();
  
    if (response?.status === 200) {
      localStorage.setItem('user', username);
      window.location.href = 'index.html';
    } else {
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
}

function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = 'index.html'));
}

function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
      playControlEl.style.display = display;
    }
}

async function getUser(email) {
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }



// class User{
//     onlineStatus;

//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//         this.onlineStatus = false;
//     }


// }

// cleanUsers();

// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

// if(loginButton){
//     loginButton.addEventListener("click", (e) => {
//         e.preventDefault();
        
//         const username = loginForm.username.value;
//         const password = loginForm.password.value;

//         let users = [];
//         const usersText = localStorage.getItem('Users');
//         if (usersText) {
//             users = JSON.parse(usersText);
//         };

//         let test = users.find(User => User.username === username)
//         console.log(test)

//         if (username === "" || password === "") {
//             loginErrorMsg.style.opacity = 1;
//                 loginErrorMsg.innerHTML = '<p>Please enter a Username and Password</p>';

//         } else if (test && test.password === password) {
//             alert("You have successfully logged in.");
//             localStorage.setItem("currentUser", JSON.stringify(username));
//             const newCurrentUser = document.querySelector('#login-icon');
//             newCurrentUser.textContent = username;
//             location.reload();
//             cleanUsers();
                
//         } else {
//             loginErrorMsg.style.opacity = 1;
//         }
        
//     })
// }

// function compareUser(user1, user2) {
//     return user1.name === user2.name;
// }

// const signupForm = document.getElementById("signup-form");
// const signupButton = document.getElementById("signup-form-submit");

// if(signupButton){
//     signupButton.addEventListener("click", (e) => {
//         e.preventDefault();

//         const username = signupForm.newUsername.value;
//         const password = signupForm.newPassword.value;
//         const newUser = new User (username, password, onlineStatus = true);

//         let users = [];
//         const usersText = localStorage.getItem('Users');
//         if (usersText) {
//             users = JSON.parse(usersText);
//         }

//         let found = false;

//         let check = users.find(User => User.username === username);

//         if (username === "" || password === ""){

//             loginErrorMsg.style.opacity = 1;
//                 loginErrorMsg.innerHTML = '<p>Please enter a Username and Password</p>';
//             location.reload;
//             found = true;
//         }

//         if (check) {
//                 loginErrorMsg.style.opacity = 1;
//                 loginErrorMsg.innerHTML = '<p>Already a User</p>';
//                 found = true;
//                 }

//         if(!found) {
//             users.push(newUser);
//             localStorage.setItem('Users', JSON.stringify(users));

//             alert("You have successfully signed up!");
//             localStorage.setItem("currentUser", JSON.stringify(username));
//             const newCurrentUser = document.querySelector('#login-icon');
//             newCurrentUser.textContent = username;
//             window.location.href = 'index.html';
//         }
//     })
// }

// function cleanUsers() {
    
//     let users = [];
//     const usersText = localStorage.getItem('Users');
//     if (usersText) {
//         users = JSON.parse(usersText);
//     }
//     updatedUsers=users.filter(elem => elem.username);
//     updatedUsers=users.filter(elem => elem.password);

//     users = updatedUsers;

//     localStorage.setItem('Users', JSON.stringify(users));
// }