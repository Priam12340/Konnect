import React from 'react';
import './SignUpLogin.scss';
import { Button } from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

function SignUpLogin() {
  const history = useHistory();

  function handleSignupClick() {
    history.push('/createAccount');
  };

  return (
    <div className="bg">
      <div className="SignUpLogin">
        <div className="SignUp">
          <Button className="signUpButton" size="lg" pill theme="light" onClick={handleSignupClick}>Sign Up</Button>
        </div>
        <div className="Login">
          <Button className="loginButton" size="lg" pill theme="info">Login</Button>
        </div>
        <div className="social-media-icons">
          <div className="fb-icon">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </div>
          <div className="google-icon">
            <FontAwesomeIcon icon={['fab', 'google']} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpLogin;
