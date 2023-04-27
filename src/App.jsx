import React from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Presentation } from './presentation/presentation';
import { Events } from './events/events';
import { Index } from './index/index';
import { Merch } from './merch/merch';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import './index.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  const [displayName, setDisplay ] = React.useState();

  function displayName() {
    if (AuthState.authenticated) {
      setDisplay(displayName === userName ? "Login" : userName)

    }
  };

  return (
    <div className='body bg-dark text-light'>
      <header className='container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='navbar-brand' href='#' > <img src="TreehousePNG-transformed.png" width="45" height="45" class="d-inline" />
            Treehouse Talks<sup>&reg;</sup>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <menu className='navbar-nav'>
            <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                  About Us
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='presentations'>
                    Presentations
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='merch'>
                    Merchandise
                  </NavLink>
                </li>
              )}
              <li className='nav-item'>
                <NavLink className='nav-link' to='events'>
                  Events
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' id='login-icon' to='login'>
                  {displayName}
                </NavLink>
              </li>
          </menu>
          </div>
          
        </nav>
      </header>

      <Routes>
        <Route
          path='/'
          element={
            <Login
              userName={userName}
              authState={authState}
              onAuthChange={(userName, authState) => {
                setAuthState(authState);
                setUserName(userName);
              }}
            />
          }
          exact
        />
        <Route path='/presentations' element={<Presentation />} />
        <Route path='/events' element={<Events />} />
        <Route 
          path='/merch'  
          element={
            <Merch
              userName={userName}
              authState={authState}
              onAuthChange={(userName, authState) => {
                setAuthState(authState);
                setUserName(userName);
              }} 
            />}
         />
        <Route path='/' element={<Index />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <footer class="bg-dark text-white">
      <div class="container-fluid">
          <span class="text-reset">Treehouse Talks</span>
          <a href="https://github.com/Tweagan11/website-html">GitHub</a>
      </div>
     </footer>
    </div>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
