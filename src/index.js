import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { BrowserRouter } from "react-router-dom";
import firebase from './services/firebase';
import { createFirestoreInstance } from 'redux-firestore';
import App from './App';

import './index.css';

import * as serviceWorker from './serviceWorker';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import 'rsuite/dist/styles/rsuite-default.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-image-picker/dist/index.css';

const rrfConfig = { userProfile: 'users', useFirestoreForProfile: true };
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
