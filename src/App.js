import React from 'react';
import './App.css';
import SignUpLogin from './components/SignUpLogin/SignUpLogin';
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <SignUpLogin/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={SignUpLogin} />
      </Switch>
    </div>
  );
}

export default App;
