import React from 'react';
import './SignUpLogin.scss';
import { Button } from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SignUpLogin() {
  return (
    <div className="SignUpLogin">
        <div className="SignUp">
          <Button size="lg" pill theme="light">Sign Up</Button>
        </div>
        <div className="Login">
          <Button size="lg" pill theme="info">Login</Button>
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
  );
}

export default SignUpLogin;
