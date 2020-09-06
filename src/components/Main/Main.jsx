import React, { Component } from "react";
import Home from "../Home/Home";
import SignUpLoginWithWidget from "../SignUpLogin/SignUpLoginWithWidget";
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Main extends Component {

  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);

    this.state = {
      authenticated: null,
      error: null
    };
  }


  success(pos) {
    let crd = pos.coords;
    let dateRetrieved = new Date(pos.timestamp);
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    console.log(`Retrieved at ${dateRetrieved}`);

  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  // function revokePermission() {
  //   navigator.permissions.revoke({name:'geolocation'}).then(function(result) {
  //     console.log('Permission ', result.state);
  //   });
  // }

  componentDidMount() {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
    navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
      if (result.state === 'granted') {
        console.log('Permission ', result.state);
      } else if (result.state === 'prompt') {
        console.log('Permission ', result.state);
        navigator.geolocation.getCurrentPosition(this.success, this.error, options);
      } else if (result.state === 'denied') {
        console.log('Permission ', result.state);
      }
      result.onchange = function () {
        console.log('Permission ', result.state);
      }
    });
  }

  render() {
    console.log("AuthState being received ", this.props.authState);
    if (this.props.authState.isPending) return null;
    const button = this.props.authState.isAuthenticated ?
      <Home /> :
      <SignUpLoginWithWidget baseUrl='https://dev-634748.okta.com' />;
    return (
      <div>
        {button}
      </div>
    );
  }

});
