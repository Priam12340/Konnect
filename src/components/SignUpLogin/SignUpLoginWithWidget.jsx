import React from 'react';
import { Redirect } from 'react-router-dom';
import OktaSignInWidget from './Login/OktaSignInWidget';
import { useOktaAuth } from '@okta/okta-react';
import { useFirestore } from "react-redux-firebase";

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

  function parseSchema (schema, onSuccess, onFailure) {
    // handle parseSchema callback
    console.log("schema",schema);
    onSuccess(schema);
  }

  function preSubmit (postData, onSuccess, onFailure) {
    // handle preSubmit callback and push data to firebase
    console.log("postData",postData);
    onSuccess(postData);
    let userData = {
      displayName: postData.displayName,
      email: postData.email,
      firstName: postData.firstName,
      lastName: postData.lastName
    }
    firestore.set({ collection: 'users', doc: userData.displayName }, userData);
  }

  function postSubmit (response, onSuccess, onFailure) {
    // handle postsubmit callback
    console.log("response",response);
    onSuccess(response);
  }

  if (authState.isPending) return null;
  return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/' }} /> :
    <OktaSignInWidget
      baseUrl={props.baseUrl}
      onSuccess={onSuccess}
      parseSchema={parseSchema}
      preSubmit={preSubmit}
      postSubmit={postSubmit}
      onError={onError} />;
}

export default SignUpLoginWithWidget;
