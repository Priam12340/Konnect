import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

export default class OktaSignInWidget extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      baseUrl: this.props.baseUrl,
      registration: {
        parseSchema: this.props.parseSchema,
        preSubmit: this.props.preSubmit,
        postSubmit: this.props.postSubmit
      },
      authParams: {
        // If your app is configured to use the Implicit Flow 
        // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
        // you will need to uncomment the below line
        // pkce: false
      },
      features: {
        router: true,
        registration: true,
      },
      idps: [
        { type: 'Google', id: '0oau0f5ydTqXn4icM4x6' },
        { type: 'Facebook', id: '0oau09hynibyENpba4x6' }
      ]
    });
    this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div />;
  }
};