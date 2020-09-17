import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import OktaSignInWidget from './Login/OktaSignInWidget';
import { useOktaAuth } from '@okta/okta-react';
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";

const SignUpLoginWithWidget = (props) => {

  const { authService, authState } = useOktaAuth();
  const firestore = useFirestore();
  
  function onSuccess(res) {
    if (res.status === 'SUCCESS') {
      return authService.redirect({
        sessionToken: res.session.token
      });
    } else {
      // The user can be in another authentication state that requires further action.
      // For more information about these states, see:
      //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
    }
  }

  function onError(err) {
    console.log('error logging in', err);
  }

  function onSignUp(postData) {
    firestore.set({ collection: 'users', doc: postData.email }, postData);
  }

  if (authState.isPending) return null;
  return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/' }} /> :
    <OktaSignInWidget
      baseUrl={props.baseUrl}
      onSuccess={onSuccess}
      onError={onError} />;
}

export default SignUpLoginWithWidget;
