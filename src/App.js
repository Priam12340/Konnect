import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import SignUpLogin from "./components/SignUpLogin/SignUpLogin";
import CreateAccount from "./components/AccountCreation/CreateAccount";
import Profile from "./components/Profile/Profile";
import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <SignUpLogin />
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
      </Switch>
    </div>
  );
}

export default App;
