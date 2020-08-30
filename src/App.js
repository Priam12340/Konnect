import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';

import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import SignUpLoginWithWidget from "./components/SignUpLogin/SignUpLoginWithWidget";
import CreateAccount from "./components/AccountCreation/CreateAccount";
import Profile from "./components/Profile/Profile";
import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App(props) {

  function onAuthRequired() {
    props.history.push('/home');
  }

  let config = {
    issuer: 'https://dev-634748.okta.com/oauth2/default',
    clientId: '0oas5wo0qLyjtyiHo4x6',
    redirectUri: 'http://localhost:3000/home',
    onAuthRequired: { onAuthRequired },
    idps: [
      { type: 'Facebook', id: '0oau09hynibyENpba4x6' }
    ],
    idpDisplay: "SECONDARY"
  }

  return (
    <div className="App">
      <Switch>
        <Security  >
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/login">
            <SignUpLoginWithWidget baseUrl='https://dev-634748.okta.com' />
          </Route>
          <Route exact path="/createAccount">
            <CreateAccount />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Security>
      </Switch>
    </div>
  );
}

export default App;
