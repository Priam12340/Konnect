import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { Security } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import PeopleNearMe from "./components/PeopleNearMe/PeopleNearMe";
import SignUpLoginWithWidget from "./components/SignUpLogin/SignUpLoginWithWidget";
import CreateAccount from "./components/AccountCreation/CreateAccount";
import Profile from "./containers/Profile";
import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faEnvelope)

function App(props) {
  const history = useHistory();

  function onAuthRequired() {
    history.push('/login');
  }

  let config = {
    issuer: 'https://dev-634748.okta.com/oauth2/default',
    clientId: '0oas5wo0qLyjtyiHo4x6',
    redirectUri: window.location.origin + '/home',
    onAuthRequired: { onAuthRequired },
    pkce: false,
}

  return (
    <div className="App">
      <Switch>
        <Security {...config} >
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
          <Route path="/peopleNearMe/:id">
            <PeopleNearMe />
          </Route>
        </Security>
      </Switch>
    </div>
  );
}

export default App;
