// const { response } = require("express");

(async () => {
    let online = false;
    const username = localStorage.getItem('userName');
    if (username) {
        const nameEl = document.querySelector('#login-icon');
        nameEl.value = username;
        const user = await getUser(nameEl.value);
        online = true;
        admin = user.admin;
        console.log(admin);
    }

    if (admin) {
      document.querySelector('#login-icon').href = "admin.html";
    }

    if (online) {
        
        setDisplay('signup-header', 'none');
        setDisplay('login-header', 'none');
        setDisplay('logout', 'block');
        setDisplay('signbox', 'none')
        // window.location.href = 'admin.html';
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
  
async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#userName')?.value;
  const password = document.querySelector('#userPassword')?.value;
  if(!userName) {
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: Please Enter Username`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
  if(!password) {
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: Please Enter Password`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
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
    window.location.href = 'index.html';
  } else {
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}



function logoutUser() {
  console.log('test1');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    });
    goBack();
}


function setDisplay(controlId, display) {
    const navEl = document.querySelector(`#${controlId}`);
    if (navEl) {
      navEl.style.display = display;
    }
}

async function getUser(email) {
    const response = await fetch(`/api/admin/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }

  function goBack() {
    localStorage.clear();
    window.location.href = 'index.html';
  }