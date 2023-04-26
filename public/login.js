// const { response } = require("express");

(async () => {
    let online = false;
    const username = localStorage.getItem('userName');
    if (username) {
        const nameEl = document.getElementById('login-form');
        nameEl.value = username;
        const user = await getUser(nameEl.value);
        online = user?.online;
    }

    if (online) {
        document.querySelector('#login-icon').href = "admin.html";
        setDisplay('signup-header', 'none');
        setDisplay('login-header', 'none');
        setDisplay('logout', 'block');
        window.location.href = 'admin.html';
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
   loginOrCreate('/api/auth/create');
}
  
async function loginOrCreate(endpoint,req,res) {
  const userName = document.querySelector('#userName')?.value;
  const password = document.querySelector('#userPassword')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const body = await response.json();

  if (response?.status === 200) {
    localStorage.setItem('userName', userName);
    window.location.href = 'play.html';
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
